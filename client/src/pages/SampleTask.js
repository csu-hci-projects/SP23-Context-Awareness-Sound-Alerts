import React, {useRef} from "react";
import {alertConfig} from "../components/alertConfig";
import {Button} from "reactstrap";
import WPMtest from "../components/WPMtest";
import Example from "../components/Example";
import Timer from "../components/timer";

export default function SampleTask({context}){

    const URL_PREFIX = "http://localhost:22222/";
    const alert1 = useRef(new Audio(URL_PREFIX + alertConfig.sounds[0].file));
    const alert2 = useRef(new Audio(URL_PREFIX + alertConfig.sounds[1].file));
    const alert3 = useRef(new Audio(URL_PREFIX + alertConfig.sounds[2].file));

    return(
        <div className={"content"}>
            <h1>What am I going to do in this experiment?</h1>
            <div className={"text-container"}>
            <p className={"text-body"}>
                We are going to give you a typing speed test in <span className={"number"}>3</span> different sound environments, a <strong>City</strong>, a  <strong>Beach</strong>, and an <strong>Airport.</strong><br/><br/>
                Give it a shot! You'll notice that the box turns <strong style={{color: "red"}}>RED</strong> if you make a mistake.</p><br/>
                <Example>
                    <WPMtest
                        context={context}
                        text={"The quick brown fox jumps over the lazy dog"}
                        phaseData={{wpm: 0}} />
                </Example>
                <br/><hr/>

                <p className={"text-body"}>
                    You may also hear one of <span className={"number"}>3</span> alert sounds during each environment.
                    Please play the sounds below to get acquainted with what the alerts sound like.
                </p>
            <Example>
                <Button className={"Button"} onClick={()=> alert1.current.play()}><i className={"fa fa-play-circle-o"}></i> Alert Sound 1</Button><br/>
                <Button className={"Button"} onClick={()=> alert2.current.play()}><i className={"fa fa-play-circle-o"}></i> Alert Sound 2</Button><br/>
                <Button className={"Button"} onClick={()=> alert3.current.play()}><i className={"fa fa-play-circle-o"}></i> Alert Sound 3</Button><br/>
            </Example>
                <hr/>
                <p className={"text-body"}>
                    If you hear one of the alert sounds, please press the button below:</p><br/>
                    <Example>
                        <Button className={"action-button"}>Click Here When You Hear An Alert</Button>
                    </Example>
                <hr/>
                <p className={"text-body"}>
                    Each typing test will last a few minutes, then you will have a 30 second break.
                </p>
                <Example>
                    <Timer setBreakTime={()=> null} setNow={()=> null}/>
                </Example>
                <hr/>
                <p className={"text-body"}>When you're ready, press <strong>Continue</strong> to begin the experiment.</p>
            </div>
        </div>
    )
}