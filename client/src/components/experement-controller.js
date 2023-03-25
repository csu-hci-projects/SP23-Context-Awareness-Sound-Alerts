import React, {useState} from "react";
import Experiment from "../pages/experiment";

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

    const [currentPhase, setCurrentPhase] = useState(0)
    const [experimentComplete, setExperiementComplete] = useState(false)
    const [breakTime, setBreakTime] = useState(false)

    const nextPhase = ()=> {

    }

    return (
        <div className={"content"}>
            <Experiment context={props.context} config={expConfig[currentPhase]} phase={currentPhase}/>
        </div>
    );
}