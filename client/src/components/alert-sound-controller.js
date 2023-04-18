import {alertConfig} from "./alertConfig";
import {useEffect, useRef, useState} from "react";

export default function AlertSoundController(props){

    const [controllerStart, setControllerStart] = useState(new Date());

    const getRandomAlertTimes = ()=>{
        const result = [undefined, undefined, undefined]
        const currentTime = new Date().getTime();
        let lastAlert = alertConfig.frontPadding_ms;
        let generatedAlertTime = undefined;

        for (let i = 0; i < 3; i++){
            generatedAlertTime =
                Math.floor(Math.random() * alertConfig.potentialLength_ms)
                + lastAlert + alertConfig.padding_ms;

            result[i] = generatedAlertTime + currentTime;
            lastAlert = generatedAlertTime;
        }

        return result;
    }


    const [nextAlert, setNextAlert] = useState(0);
    const [alertTimes] = useState(getRandomAlertTimes());
    const [elapsed, setElapsed] = useState(new Date());
    const URL_PREFIX = "http://localhost:22222/";
    const alert1 = useRef(new Audio(URL_PREFIX + alertConfig.sounds[0].file));
    const alert2 = useRef(new Audio(URL_PREFIX + alertConfig.sounds[1].file));
    const alert3 = useRef(new Audio(URL_PREFIX + alertConfig.sounds[2].file));
    const alerts = [alert1.current, alert2.current, alert3.current];

    alert1.current.volume = alertConfig.sounds[0].volume
    alert2.current.volume = alertConfig.sounds[1].volume
    alert3.current.volume = alertConfig.sounds[2].volume

    // Make sure all alert sounds have stopped when component unmounts
    useEffect(()=>{
        return ()=>{
            alert1.current.pause();
            alert2.current.pause();
            alert3.current.pause();
        }
    }, [])

    setTimeout(()=>{
        const currentTime_ms = new Date();
        setElapsed(new Date(currentTime_ms - controllerStart));

        if (alertTimes && currentTime_ms.getTime() >= alertTimes[nextAlert]){
            // Latin Squares specified alert sound order
            const indexOfSoundToPlay = props.alertOrder[nextAlert];

            alerts[indexOfSoundToPlay].play()
                .then(()=>{
                    console.log("Triggered alert sound! " + alertConfig.sounds[indexOfSoundToPlay].file);
                    // Log alert time
                    props.context.experimentState.phaseData[props.currentPhase]
                        .alertTimes[props.alertOrder[nextAlert]]
                        = new Date().getTime();
                    console.log("Logged Sound Alert: Phase " + props.currentPhase + "Alert " + props.alertOrder[nextAlert] );
                    setNextAlert(nextAlert + 1);
                })
        }
    }, 100)

    const showAlertTimes = ()=>{
        if (alertTimes){
            return alertTimes.map((i)=>{
                const alertDiff = new Date(new Date(i) - controllerStart)

                return (
                    <p>+{alertDiff.getMinutes()}:{alertDiff.getSeconds()}</p>
                )
            })
        } else {
            console.log("No alertTimes yet")
            return null;
        }

    }

    const debugGuard = ()=>{
        if(props.context.debug){
            return(
                <div className={"debug-alert-sound"}>
                    <h3>Alerts should play at:</h3>
                    <p>Elapsed: {elapsed.getMinutes()}:{elapsed.getSeconds()}</p>
                    <p>Alert Order: {JSON.stringify(props.alertOrder)}</p>
                    <p>Next Alert: {nextAlert}</p>
                    {showAlertTimes()}
                </div>
            )
        } else {
            return null
        }
    }

    return(debugGuard())
}