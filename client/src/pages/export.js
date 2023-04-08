import React, {useState} from "react";
import SaveButton from "../components/save-button";

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
            {props.context.debug ? <h1>Data:</h1> : null}
            {props.context.debug ? <p>{props.context.experimentState.toString()}</p> : null}
            {autoSaveOrShowManual()}<p>{autoSaveResult}</p>
        </div>
    )
}