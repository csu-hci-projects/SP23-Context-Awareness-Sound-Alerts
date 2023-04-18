import NextPageButton from "../components/NextPageButton";
import NavBar from "../components/NavBar";
import Data from "../components/Data";
import React from "react";


export default function TaskDescription(props){

    return(
        <div className={"content"}>
            <h1>Task Descriptions & Expectations</h1>
            <p className={"text-body"}>
                In the next page/section you will have the option to test a text prompt.
                You will also be able to hear the <span className={"number"}>3</span>  sound alerts that will be played in each environment.
                This will allow you to get acquainted with the alert sounds before beginning the experiment.
            </p>
            <p className={"text-body"}>Lastly, you'll get a preview of the button to click when you hear an alert and the break timer between sections.</p>
            <p className={"text-body"}>When you are ready, please click <strong>Continue</strong> to begin the experiment.</p>
        </div>
    )
}