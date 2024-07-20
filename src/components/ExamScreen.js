import NextButton from "./NextButton";
import Progress from "./Progress";
import Question from "./Question";
import { useQuestions } from "./QuestionsContext";
import Timer from "./Timer";

export default function ExamScreen() {
  const { currentAnswer } = useQuestions();
  return (
    <>
      <Progress />
      <Question />
      <Timer />
      {currentAnswer !== null && <NextButton />}
    </>
  );
}
