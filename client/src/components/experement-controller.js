import React, {useState} from "react";
import Experiment from "../pages/experiment";
import BreakTimer from "./break-timer";

export default function ExperimentController(props){

    // ****************************************************************
    // A bunch of temp stuff until this gets generated programmatically
    const exp0 = {
        environment: "Right By Da Beach BBooooIIIIII",
        backgroundSound: "beach-6min-48k24b.flac",
        notificationSoundOrder: [0, 1, 2],
        backgroundImage: "margahrita.jpeg",
        typingText: "The quick brown fox likes margaritas."
    }
    const exp1 = {
        environment: "Expensive bar where airplanes park.",
        backgroundSound: "airport-ambience-mexico-5min48k24b.flac",
        notificationSoundOrder: [1, 2, 0],
        backgroundImage: "bloody-mary.jpeg",
        typingText: "The quick brown fox likes bloody mary's."
    }
    const exp2 = {
        environment: "City (bar)",
        backgroundSound: "city-crosswalk-5min48k24b.flac",
        notificationSoundOrder: [2, 0, 1],
        backgroundImage: "martini.jpeg",
        typingText: "The quick brown fox is now trashed."
    }

    const experimentConfig = {
        expID: 0,
        order: [exp0, exp1, exp2]
    }

    const [expConfig, setExpConfig] = useState(experimentConfig)
// ****************************************************************

    const NUM_PHASES = 3;
    const [currentPhase, setCurrentPhase] = useState(0)
    const [breakTime, setBreakTime] = useState(false)

    const nextPhase = ()=> {
       if(currentPhase >= NUM_PHASES - 1){
           // Finished last phase, advance page
           props.context.setPageIndex(props.context.pageIndex + 1)
       } else {
           // Set experiment end time
           props.context.experimentState.phaseData[currentPhase]
               .experimentEndTime = new Date().getTime();
           // Set up the next phase and run a break timer first
           setCurrentPhase(currentPhase + 1)
           setBreakTime(true)
       }
    }

    const isItBreakTime = ()=> {
        if(breakTime){
            return <BreakTimer setBreakTime={setBreakTime}/>
        } else {
            return <Experiment
                context={props.context}
                config={expConfig.order[currentPhase]}
                alertOrder={expConfig.order[currentPhase].notificationSoundOrder}
                nextPhase={nextPhase}
                currentPhase={currentPhase}/>
        }
    }

    return (
        <div className={"content"}>
            {props.context.debug ? <p>Current Phase: {currentPhase + 1}</p> : null}
            {isItBreakTime()}
        </div>
    );
}