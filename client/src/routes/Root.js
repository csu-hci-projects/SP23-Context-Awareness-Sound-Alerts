import '../App.css';
import NextPageButton from "../components/NextPageButton";

function Root(props) {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Experiment Portal
        </p>
      </header>
        <NextPageButton />
    </div>
  );
}

export default Root;
