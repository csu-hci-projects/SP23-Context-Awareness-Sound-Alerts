import React, {useState, useRef, useEffect} from "react";
import NavBar from "../components/NavBar";
import * as PropTypes from "prop-types";
import {Button} from "reactstrap";
import Sound from "../components/Sound";
import WPMtest from "../components/WPMtest";
export default function Experiment(props) {

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
