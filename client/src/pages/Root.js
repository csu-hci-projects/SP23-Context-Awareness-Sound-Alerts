import '../App.css';
import NextPageButton from "../components/NextPageButton";
import PreviousPageButton from "../components/PreviousPageButton";
import NavBar from "../components/NavBar";

export default function Root(props) {

  return (
    <div className="App">
        <p>
          Experiment Portal Home
        </p>
        <NavBar context={props.context}/>
    </div>
  );
}

