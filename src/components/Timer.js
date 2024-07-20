import { useState, useEffect } from "react";
import { useQuestions } from "./QuestionsContext";

function Timer() {
  const { dispatcher } = useQuestions();
  const [time, setTime] = useState(600);
  const mints = Math.floor(time / 60);
  const secs = time % 60;

  useEffect(() => {
    const id = setInterval(
      () =>
        setTime((time) => {
          if (time === 0) dispatcher({ type: "finish" });
          return time - 1;
        }),
      1000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <h4 className="timer">
      {mints < 10 && "0"}
      {mints}:{secs < 10 && "0"}
      {secs}
    </h4>
  );
}

export default Timer;
