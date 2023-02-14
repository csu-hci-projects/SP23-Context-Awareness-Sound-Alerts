import '../App.css';
import StartHearingTest from "../components/StartHearingTest";

function Root() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Experiment Portal
        </p>
          <StartHearingTest/>
      </header>
    </div>
  );
}

export default Root;
