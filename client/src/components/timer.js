import {useState} from "react";

export default function Timer(props){

    const TIMER_LENGTH_MINS = 1;
    const TIMER_LENGTH_MS = TIMER_LENGTH_MINS * 1000 * 60;

    const [endTime] = useState(new Date(new Date().getTime() + TIMER_LENGTH_MS));
    const [timeLeft, setTimeLeft] = useState(new Date(endTime - new Date().getTime()));

    // Sets how often the display will refresh in milliseconds
    // Essentially the resolution of the displayed timer
    setTimeout(()=>{
        if (timeLeft <= 0){props.setBreakTime(false)}

        setTimeLeft(new Date(endTime - new Date().getTime()))
    }, 100)

    return(
        <div className={"timer"}>
            <h2>Next Experiment Beginning In:</h2>
            <h2 className={"timer-time-left"}>Time Left: {timeLeft.getMinutes()}:{timeLeft.getUTCSeconds().toPrecision(2)}</h2>
        </div>
    )
}