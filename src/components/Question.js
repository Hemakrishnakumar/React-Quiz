import { useQuestions } from "./QuestionsContext";

const Question = () => {
  const { questions, dispatcher, currentAnswer, index } = useQuestions();
  const question = questions[index];
  const checkAnswer = (i) => {
    dispatcher({
      type: "setAnswer",
      payload: {
        answer: i,
        points: i === question.correctOption ? question.points : 0,
      },
    });
  };

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            disabled={currentAnswer !== null}
            onClick={() => checkAnswer(i)}
            key={option}
            className={`btn btn-option ${
              currentAnswer !== null
                ? i === +question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } ${i === currentAnswer ? "answer" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
