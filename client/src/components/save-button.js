import {Button} from "reactstrap";
import {useState} from "react";

export default function SaveButton(props){
    const awaiting = "⬜ awaiting...";
    const pending = "🔁 working...";
    const success = "✅ it worked! saved with database ID:";
    const fail = "❌ error";
    const [status, setStatus] = useState(awaiting);
    const [returnID, setReturnID] = useState(undefined);

    const displayReturnID = ()=>{
        return returnID ? returnID : null
    }

    const handleClick = () =>{
        setStatus(pending);
        props.save(props.context.experimentState)
            .then((result)=>{
                if (result.success === true){
                    setStatus(success)
                    setReturnID(result.insertID)
                } else {
                    setStatus(fail);
                    setReturnID(undefined)
                }
            })
            .catch((err)=>{
                setStatus(fail)
                console.log(err)
            })
    }

    return(
        <div className={"save-button"}>

            <Button className={"navButton"} onClick={handleClick}>Save Data to Database</Button>
            <p>Status: {status}</p>
            {displayReturnID()}
        </div>
    )
}