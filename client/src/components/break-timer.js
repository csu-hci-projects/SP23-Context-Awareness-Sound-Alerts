import {Button} from "reactstrap";
import Timer from "./timer";
import React from "react";

export default function BreakTimer(props){
    // set props.setBreakTime(false) when done
    return (
        <div className={"break-timer"}>
            <Timer setBreakTime={props.setBreakTime} setNow={props.setNow}/>
            {props.context.debug ? <Button className={"Button"} onClick={()=>props.setBreakTime(false)}>manual advance</Button> : null}
        </div>
    )
}