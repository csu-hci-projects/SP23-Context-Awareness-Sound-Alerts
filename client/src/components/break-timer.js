import {Button} from "reactstrap";
import Timer from "./timer";
import React from "react";

export default function BreakTimer(props){
    // set props.setBreakTime(false) when done
    return (
        <div className={"break-timer"}>
            <p>This should be a break timer</p>
            <Timer setBreakTime={props.setBreakTime}/>
            <Button className={"navButton"} onClick={()=>props.setBreakTime(false)}>manual advance</Button>
        </div>
    )
}