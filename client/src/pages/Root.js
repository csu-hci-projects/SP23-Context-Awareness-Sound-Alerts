import '../App.css';
import NavBar from "../components/NavBar";
import Data from "../components/Data";
import React from "react";

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

