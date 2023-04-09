import WPMtest from "./WPMtest";
import React from "react";

export default function Example(props){

    return(
        <div className={"example-container"}>
            <div className={"example"}>
                {props.children}
            </div></div>
    )
}