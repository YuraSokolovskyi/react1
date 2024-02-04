import './App.css';
import Film from "./components/Film";
import BIO from "./components/BIO";
import Time from "./components/Time";

function App() {
  return (
    <>
      <h2 className="taskNumber">Task 1</h2>
      <Film/>

        <h2 className="taskNumber">Task 2</h2>
        <BIO/>

        <h2 className="taskNumber">Task 3</h2>
        <Time/>
    </>
  );
}

export default App;
