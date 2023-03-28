import {alertConfig} from "./alertConfig";
import {useState} from "react";

export default function AlertSoundController(props){

    const getRandomAlertTimes = ()=>{
        const result = [undefined, undefined, undefined]
        const currentTime = new Date().getTime();
        let lastAlert = alertConfig.frontPadding_ms;
        let generatedAlertTime = undefined;

        for (let i = 0; i < 3; i++){
            generatedAlertTime =
                Math.floor(Math.random() * alertConfig.potentialLength_ms)
                + lastAlert + alertConfig.padding_ms;

            result[i] = generatedAlertTime;
            lastAlert = generatedAlertTime;
        }

        return result;
    }

    const [nextAlert, setNextAlert] = useState(0);
    const [alertTimes, setAlertTimes] = useState(undefined);
    const [currentSound, setCurrentSound] = useState(undefined);

    setTimeout(()=>{
        const currentTime_ms = new Date().getTime();

        if (currentTime_ms >= alertTimes[nextAlert]){
            setCurrentSound(new Audio("http://localhost:22222/"
                + alertConfig))
            // TODO: get alert sound order
        }
    }, 100)

    return(null)
}