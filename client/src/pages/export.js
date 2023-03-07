import NavBar from "../components/NavBar";
import React from "react";

export default function Export(props){

    return(
        <div className={"App"}>
            <h1>The JSON Data we accumulated during the experiment. We'll save it somehow.</h1>
            <p>{JSON.stringify(props.context.experimentState)}</p>
            <NavBar context={props.context}/>
        </div>

    )
}