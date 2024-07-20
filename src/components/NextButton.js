import { useQuestions } from "./QuestionsContext";

export default function NextButton() {
  const { dispatcher, index } = useQuestions();
  if (index < 14)
    return (
      <button
        onClick={() => dispatcher({ type: "next" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  else
    return (
      <button
        onClick={() => dispatcher({ type: "finish" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
}
