import '../App.css';
import NavBar from "../components/NavBar";
import Data from "../components/Data";
import React from "react";
import Timer from "../components/timer";

export default function Root(props) {

  return (
    <div className="content">
        <h1>Experiment Portal Home</h1>
        <Timer/>
    </div>
  );
}

