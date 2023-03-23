import {useEffect, useState} from "react";
import {Button} from "reactstrap";

export default function Sound(props){

    const [audio] = useState(new Audio(" ../../../media/airport-ambience-mexico-5min48k24b.flac"))

    const playAudio = ()=>{
        if (audio !== undefined){
            console.log("Play!" + JSON.stringify(audio))
            audio.play()
                .catch((err)=>{
                    console.log(err)
                });
        } else {
            console.log("audio is undefined")
        }

    }

    return(
        <div>
            <Button onClick={playAudio}>Play Audio</Button>
        </div>
    )
}