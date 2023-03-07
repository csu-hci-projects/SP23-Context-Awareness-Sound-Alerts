import NextPageButton from "../components/NextPageButton";
import NavBar from "../components/NavBar";
import Data from "../components/Data";
import React from "react";


export default function HearingTest(props){

    return(
        <div className={"App"}>
            <p>Administer initial hearing test?</p>
            <NavBar context={props.context}/>
        </div>
    )
}