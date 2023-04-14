import {useEffect, useState} from "react";
import {Button} from "reactstrap";

export default function BackgroundSound(props){

    const [audio] = useState(new Audio("http://localhost:22222/" + props.url))
    const [play, setPlay] = useState(true)

    useEffect(()=>{
        if(play){
            audio.volume = props.config.volume
            audio.play()
                .catch((err)=>{
                    console.log("Error Playing BackgroundSound: " + err)
                })
            console.log("Audio Playing");
        }else{
            audio.pause();
            console.log("Audio Paused");
        }
    },[play])

    // Kill the background sound when the component unmounts
    useEffect(()=>{
        audio.volume = props.config.volume
        audio.play();

        return ()=>{
            audio.pause();
        }
    }, [])

    const handleClick = ()=>{
        setPlay(play ? false : true );
    }

    return(
        <div>
            {props.context.debug ? <Button onClick={handleClick}>Play / Pause</Button> : null}
        </div>
    )
}