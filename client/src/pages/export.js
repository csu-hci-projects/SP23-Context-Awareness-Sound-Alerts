import NavBar from "../components/NavBar";
import React from "react";

export default function Export(props){
    console.log(props.context.experimentState);
    return(
        <div className={"App"}>
            <h1>The JSON Data we accumulated during the experiment. We'll save it somehow.</h1>
            <p>{props.context.experimentState.toString()}</p>
            <NavBar context={props.context}/>
        </div>

    )
}