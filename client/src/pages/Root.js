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
        console.log("getExperimentCount() from root component mount")
    }, [])

    const debugGuard = ()=>{
        if(props.context.debug){
            return(
                <div>
                    <p>Number of experiments already performed:</p>
                    <p>{count !== undefined ? count : "Hmmm... Maybe you're not connected to the server..."}</p>
                </div>
            )
        } else {
            return null
        }
    }

  return (
    <div className="content">
        <h1>Welcome to <br/> Context Awareness Sound Alerts (CASA)!</h1>
        <p>Thank you for taking the time today to be a participate for CASA.</p>
        <p>
            During this experiment you will be asked to retype a text prompt into a text box.
            At the same time, you will hear sound alerts and click a button to acknowledge it has been heard.
            You will be completing 3 groups of various background sounds and alert sounds.
            In between each group of sound alerts, you will have a timed break.
        </p>
        <p>When you are ready, please click 'Continue' to complete the demographics survey, then you will have a chance to go through an example before beginning the experiment.</p>
        {debugGuard()}
    </div>
  );
}

