import {alertConfig} from "./alertConfig";
import {useState} from "react";

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
    const [alertTimes, setAlertTimes] = useState(getRandomAlertTimes());
    const [currentSound, setCurrentSound] = useState(undefined);
    const [elapsed, setElapsed] = useState(new Date())

    setTimeout(()=>{
        const currentTime_ms = new Date();
        setElapsed(new Date(currentTime_ms - controllerStart));

        if (alertTimes && currentTime_ms.getTime() >= alertTimes[nextAlert]){
            // Latin Squares specified alert sound order
            const soundToPlay = props.alertOrder[nextAlert];
            setCurrentSound(alertConfig.sounds[soundToPlay].file);

            currentSound.addEventListener("loadeddata", ()=>{
                console.log("Triggering alert sound! " + alertConfig.sounds[soundToPlay].file);
                currentSound.play();
                setNextAlert(nextAlert + 1);
                // TODO: log alert play time in data
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