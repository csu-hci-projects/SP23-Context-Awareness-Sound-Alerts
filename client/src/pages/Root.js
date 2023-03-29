import '../App.css';
import React, {useEffect, useState} from "react";
import Timer from "../components/timer";
import getExperimentCount from "../api/getExperimentCount";

export default function Root(props) {
    const [count, setCount] = useState(undefined)

    useEffect(()=>{
        getExperimentCount()
            .then((response)=>{
                setCount(response.count)
            });
        console.log("getExperimentCount from root component mount")
    }, [])

    const debugGuard = ()=>{
        if(props.context.debug){
            return(
                <div>
                    <p>Number of experiments already performed:</p>
                    <p>{count ? count : "Hmmm... Maybe you're not connected to the server..."}</p>
                </div>
            )
        } else {
            return null
        }
    }

  return (
    <div className="content">
        <h1>Experiment Portal Home</h1>
        {debugGuard()}
    </div>
  );
}

