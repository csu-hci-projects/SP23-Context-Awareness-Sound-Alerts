import {useEffect, useState} from "react";

export default function AlertSound(props){
    const [alert] = useState(new Audio(props.url))
    useEffect(()=>{
        alert.play()
    }, [])
    return(
        null
    )
}