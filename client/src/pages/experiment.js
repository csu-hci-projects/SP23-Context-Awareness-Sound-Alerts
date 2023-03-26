import React from "react";
import {Button} from "reactstrap";
import Sound from "../components/Sound";
import WPMtest from "../components/WPMtest";

export default function Experiment(props) {

    const handleActionClick = () => {
        let updateObject = props.context.experimentState.getCopy();
        updateObject.logAction();
        props.context.setExperimentState(updateObject);
    }

    return(
        <div className={"phase"}>
            <h3>The current environment:{props.config.environment}</h3>
            <Sound url={props.config.backgroundSound}/>
            <h1>Words Per Minute Test</h1>
            <Button className={"action-button"} onClick={handleActionClick}>Click Here When You Hear An Alert</Button>
            <WPMtest context={props.context} text={props.config.typingText}/>
            <Button className={"navButton"} onClick={props.nextPhase}>Manual Phase Advance</Button>
        </div>
    )
}
