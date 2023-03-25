import React, {useState} from "react";
import {Button} from "reactstrap";
import Sound from "../components/Sound";
import WPMtest from "../components/WPMtest";
import AlertSound from "../components/alert-sound";
export default function Experiment(props) {

    const [phaseStart, setPhaseStart] = useState(undefined);
    const handleActionClick = () => {
        let updateObject = props.context.experimentState.getCopy();
        updateObject.logAction();
        props.context.setExperimentState(updateObject);
    }

  return (
    <div className={"content"}>
      <Sound/>
      <h1>Words Per Minute Test</h1>
      <Button className={"action-button"} onClick={handleActionClick}>Click Me!</Button>
      <WPMtest context={props.context}/>
  </div>
  );
}
