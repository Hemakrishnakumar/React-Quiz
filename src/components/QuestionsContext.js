import { createContext, useContext, useEffect, useReducer } from "react";

const QuestionContext = createContext();

const initialState = {
  status: "loading",
  questions: [],
  index: 0,
  points: 0,
  currentAnswer: null,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "data":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "setAnswer":
      return {
        ...state,
        currentAnswer: action.payload.answer,
        points: state.points + action.payload.points,
      };

    case "error":
      return {
        ...state,
        questions: [],
        status: "error",
      };
    case "load":
      return {
        ...state,
        questions: [],
        status: "loading",
      };
    case "active":
      return {
        ...state,
        status: "active",
      };
    case "finish":
      return {
        ...state,
        currentAnswer: null,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        currentAnswer: null,
      };
    default:
      return {
        ...state,
        status: "ready",
        points: 0,
        index: 0,
        currentAnswer: null,
      };
  }
}

function ContextProvider({ children }) {
  const [
    { questions, status, index, currentAnswer, points, highScore },
    dispatcher,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    getQuestions();
    async function getQuestions() {
      dispatcher({ type: "load" });
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatcher({ type: "data", payload: data });
      } catch {
        dispatcher({ type: "error" });
      }
    }
  }, []);

  const numOfQuestions = questions.length;
  const totalPoints = questions.reduce((a, item) => a + item.points, 0);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        status,
        index,
        currentAnswer,
        points,
        highScore,
        dispatcher,
        numOfQuestions,
        totalPoints,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

function useQuestions() {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error("context is being used outside the Provider");
  return context;
}

export { ContextProvider, useQuestions };
