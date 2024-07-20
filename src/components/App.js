// import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import FinishScreen from "./FinishScreen";
import { useQuestions } from "./QuestionsContext";
import ExamScreen from "./ExamScreen";

function App() {
  const { status } = useQuestions();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && <ExamScreen />}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
