import React from "react";
import SaveButton from "../components/save-button";

export default function Export(props){
    console.log(props.context.experimentState);
    return(
        <div className={"content"}>
            {props.context.debug ? <h1>Data:</h1> : null}
            {props.context.debug ? <p>{props.context.experimentState.toString()}</p> : null}
            <SaveButton context={props.context}/>
        </div>
    )
}