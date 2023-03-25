import {useState} from "react";

export default function Timer(props){

    const [startTime, setStartTime] = useState(new Date())
    const [elapsed, setElapsed] = useState(new Date(new Date() - startTime))

    setTimeout(()=>{
        setElapsed(new Date(new Date() - startTime))
    }, 100)

    return(
        <div className={"timer"}>
            <p>Start Time: {startTime.toISOString()}</p>
            <p>Elapsed: {elapsed.getUTCSeconds()}:{elapsed.getUTCMilliseconds()}</p>
        </div>
    )
}