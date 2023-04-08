import {Button, Input} from "reactstrap";

export default function DebugButton({context}){
    const handleClick = ()=>{
        context.setDebug(!context.debug)
    }

    return(
        <div className={"debug debug-alert-sound hide-debug"} onClick={handleClick}>
            {/*<Input type={"switch"} onChange={handleClick} checked={context.debug}/>*/}
        </div>
    )
}