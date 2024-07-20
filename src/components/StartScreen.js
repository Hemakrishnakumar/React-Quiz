import React from "react";
import { useQuestions } from "./QuestionsContext";

const StartScreen = () => {
  const { numOfQuestions, dispatcher } = useQuestions();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatcher({ type: "active" });
        }}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
