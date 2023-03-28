import {alertConfig} from "./alertConfig";
import {useState} from "react";

export default function AlertSoundController(props){

    const [controllerStart, setControllerStart] = useState(new Date())
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
    const [currentSound, setCurrentSound] = useState(0);
    const [elapsed, setElapsed] = useState(new Date())

    setTimeout(()=>{
        const currentTime_ms = new Date();
        setElapsed(new Date(currentTime_ms - controllerStart));
        console.log("CurrentTime: " + currentTime_ms + "\n Next alert: " + alertTimes[nextAlert])

        if (alertTimes && currentTime_ms.getTime() >= alertTimes[nextAlert]){
            console.log("Triggering alert sound!")
            // Latin Squares specified alert sound order
            const soundToPlay = props.alertOrder[nextAlert]
            setCurrentSound(new Audio("http://localhost:22222/"
                + alertConfig.sounds[soundToPlay].file));
            currentSound.play();

            setCurrentSound(currentSound + 1)
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

    return(
        <div>
            <h3>Alerts should play at:</h3>
            <p>Elapsed: {elapsed.getMinutes()}:{elapsed.getSeconds()}</p>
            {showAlertTimes()}
        </div>
    )
}