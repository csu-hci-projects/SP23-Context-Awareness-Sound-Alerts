import React, {useState} from "react";
import {Button} from "reactstrap";
import Sound from "../components/Sound";
import WPMtest from "../components/WPMtest";
import AlertSound from "../components/alert-sound";
import ExperimentController from "../components/experement-controller";
export default function Experiment(props) {

    const handleActionClick = () => {
        let updateObject = props.context.experimentState.getCopy();
        updateObject.logAction();
        props.context.setExperimentState(updateObject);
    }

    return(
        <div className={"phase"}>
            <Sound/>
            <h1>Words Per Minute Test</h1>
            <Button className={"action-button"} onClick={handleActionClick}>Click Me When You Hear An Alert!</Button>
            <WPMtest context={props.context}/>
        </div>
    )
}
