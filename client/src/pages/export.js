import React, {useState} from "react";
import SaveButton from "../components/save-button";
import ClearDatabaseButton from "../components/ClearDatabaseButton";

export default function Export(props){
    const [autoSaveResult, setAutoSaveResult] = useState("")
    const [autoSaved, setAutoSaved] = useState(false)
    const submitData =  async (data) => {
        const url = "http://localhost:22222/addData"
        const config = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, config);
        return response.json();
    }
    const autoSaveOrShowManual = ()=>{
        if(props.context.debug){
            return <SaveButton context={props.context} save={submitData}/>
        } else {
            if(!autoSaved){
                setAutoSaved(true)
                submitData(props.context.experimentState)
                    .then(()=>{
                        setAutoSaveResult("✅")
                        console.log("Data Autosaved")
                    })
                    .catch(()=>{
                        setAutoSaveResult("❌")
                        setAutoSaved(false)
                        console.log("Error auto-saving Data")
                    })
            }
        }
    }
    
    return(
        <div className={"content"}>
            <h1>Debrief</h1>
            {props.context.debug ? <h1>Data:</h1> : null}
            {/* {props.context.debug ? <p>{props.context.experimentState.toString()}</p> : null} */}
            <p className={"text-body"}>
                Thank you so much for taking the time to complete this experiment.
                If you're interested, below are some of the statistics from your experiment.
                Otherwise, the experiment is now over.
            </p>
            <br/>
            <p className={"text-body"}>Average words per minute for Phase 1: {props.context.experimentState.phaseData[0].wpm.toString()}</p>
            <p className={"text-body"}>Average words per minute for Phase 2: {props.context.experimentState.phaseData[1].wpm.toString()}</p>
            <p className={"text-body"}>Average words per minute for Phase 3: {props.context.experimentState.phaseData[2].wpm.toString()}</p>
            <br/>
            <p className={"text-body"}>
                Note: Although words per minute were listed and shown on your screen, the real goal of this experiment was to see which sound alerts are most noticeable given the various backgrounds.
                The experiment tracked how closely you clicked the sound alert acknowledgement button to when the sound alert was truly played.
            </p>
            <p className={"text-body"}>Thank you again for your time!</p>
            {props.context.wpm}
            {autoSaveOrShowManual()}{props.context.debug ? null : <p className={"text-body"}>Data Submitted: {autoSaveResult}</p>}
            {props.context.debug ? <ClearDatabaseButton/> : null}
        </div>
    )
}