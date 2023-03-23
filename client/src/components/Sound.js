import {useEffect, useState} from "react";
import {Button} from "reactstrap";

export default function Sound(props){

    const [audio] = useState(new Audio("http://localhost:22222/airport-ambience-mexico-5min48k24b.flac"))
    const [play, setPlay] = useState(false)

    useEffect(()=>{
        if(play){
            audio.play()
                .catch((err)=>{
                    console.log("Error Playing Sound: " + err)
                })
            console.log("Audio Playing");
        }else{
            audio.pause();
            console.log("Audio Paused");
        }
    },[play])
    const handleClick = ()=>{
        setPlay(play ? false : true );
    }

    return(
        <div>
            <p>We'll make this button go away, thought it was handy for now.</p>
            <Button onClick={handleClick}>Play / Pause</Button>
        </div>
    )
}