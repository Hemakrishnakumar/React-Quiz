import React from "react";
import { useQuestions } from "./QuestionsContext";

const Progress = () => {
  const { numOfQuestions, index, totalPoints, points, currentAnswer } =
    useQuestions();
  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={currentAnswer === null ? index : index + 1}
      />
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        Scored <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
};

export default Progress;
