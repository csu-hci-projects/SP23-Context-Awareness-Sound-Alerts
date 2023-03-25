import React from "react";
import SaveButton from "../components/save-button";

export default function Export(props){
    console.log(props.context.experimentState);
    return(
        <div className={"content"}>
            <h1>The JSON Data we accumulated during the experiment:</h1>
            <p>{props.context.experimentState.toString()}</p>
            <SaveButton context={props.context}/>
        </div>
    )
}