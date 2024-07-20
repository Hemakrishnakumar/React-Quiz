import React from "react";
import { useQuestions } from "./QuestionsContext";

const FinishScreen = () => {
  const { points, totalPoints, highScore, dispatcher } = useQuestions();
  const percentage = Math.ceil((points / totalPoints) * 100);
  return (
    <>
      <p className="result">
        You have scored <strong>{points}</strong> out of {totalPoints} (
        {percentage}%)
      </p>
      <p className="highscore">Highscore: {highScore} points</p>
      <button className="btn btn-ui" onClick={dispatcher}>
        Restart
      </button>
    </>
  );
};

export default FinishScreen;
