import '../App.css';
import NavBar from "../components/NavBar";
import Data from "../components/Data";
import React from "react";
import Timer from "../components/timer";
import React, {useEffect, useState} from "react";
import getExperimentCount from "../api/getExperimentCount";

export default function Root(props) {
    const [count, setCount] = useState(undefined)

    useEffect(()=>{
        getExperimentCount()
            .then((response)=>{
                setCount(response.count)
                console.log(response)
            });
    }, [])

  return (
    <div className="content">
        <h1>Experiment Portal Home</h1>
        <p>Number of experiments already performed:</p>
        <p>{count ? count : "Hmmm... Maybe you're not connected to the server..."}</p>
        <Timer/>
    </div>
  );
}

