import {Button, Input} from "reactstrap";

export default function DebugButton({context}){
    const handleClick = ()=>{
        context.setDebug(!context.debug)
    }

    return(
        <div className={"debug"}>
            <p>Debug</p>
            <Input type={"switch"} onChange={handleClick}/>
        </div>
    )
}