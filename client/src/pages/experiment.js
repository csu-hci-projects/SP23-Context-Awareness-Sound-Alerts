import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";
import BackgroundSound from "../components/BackgroundSound";
import WPMtest from "../components/WPMtest";
import AlertSoundController from "../components/alert-sound-controller";

export default function Experiment(props) {
    const phaseData = props.context.experimentState.phaseData[props.currentPhase]

    // Set the experiment start time in the data once the experiment starts
    useEffect(()=>{
        phaseData.experimentStartTime = new Date().getTime();
        console.log("Experiment phase " + props.currentPhase + " started at " +
            phaseData.experimentStartTime);
    }, [])

    const handleActionClick = () => {
        // This weird copying is just for the live data updating
        let updateObject = props.context.experimentState.getCopy();
        updateObject.phaseData[props.currentPhase].logAction();
        props.context.setExperimentState(updateObject);
    }

    return(
        <div className={"phase"}>
            {props.context.debug ? <h3>The current environment:{props.config.environment}</h3> : null}
            <BackgroundSound url={props.config.backgroundSound} context={props.context}/>
            <h1>Words Per Minute Test</h1>
            <Button className={"action-button"} onClick={handleActionClick}>Click Here When You Hear An Alert</Button>
            <WPMtest context={props.context} text={props.config.typingText} phaseData={phaseData}/>
            <AlertSoundController context={props.context} alertOrder={props.alertOrder} currentPhase={props.currentPhase}/>
            <Button className={"navButton"} onClick={props.nextPhase}>Manual Phase Advance</Button>
        </div>
    )
}
