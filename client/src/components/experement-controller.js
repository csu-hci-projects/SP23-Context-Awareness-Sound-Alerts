import {useState} from "react";
import Experiment from "../pages/experiment";

export default function ExperimentController(props){

    // Do the latin squares thing?
    // Pass down config to the experiment
    const exp1 = {
        bgSound: "beach",
        alertOrder: [1, 2, 3],
        backgroundImage: "test",
        text: "test"
    }
    const exp2 = {
        bgSound: "airport",
        alertOrder: [2, 3, 1],
        backgroundImage: "test",
        text: "test"
    }
    const exp3 = {
        bgSound: "airport",
        alertOrder: [3, 1, 2],
        backgroundImage: "test",
        text: "test"
    }
    const [experimentConfig, setExperimentConfig] = useState([exp1, exp2, exp3])
    const [currentPhase, serCurrentPhase] = useState(0)

    return(
        <Experiment context={props.context} config={experimentConfig[currentPhase]}/>
    )


}