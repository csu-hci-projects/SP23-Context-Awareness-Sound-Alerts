
export default function Data(props){

    const debugGuard = ()=>{
        if(props.context.debug){
            return(
                <div className={"data debug-alert-sound"}>
                    <u>experiment data:</u>
                    <p>Gender: {props.subject.gender ? props.subject.gender : null}</p>
                    <p>Age: {props.subject.age ? props.subject.age : null}</p>
                    <p>Computer Use: {props.subject.computerUse ? props.subject.computerUse : null}</p>
                    <p>Group ID: {props.subject.groupID ? props.subject.groupID : null}</p>
                    <p>Assigned Experiment: {props.subject.assignedExperiment ? JSON.stringify(props.subject.assignedExperiment.expID) : null}</p>
                    <p>WPMs: are phase specific and in below data structure</p>
                    <p>PhaseData: {JSON.stringify(props.subject.actions)}</p>
                </div>
            )
        } else {
            return null
        }
    }
    const subjectGuard = ()=>{
        if (props.subject){
            return(debugGuard())
        } else {
            return null
        }
    }

    return(
        subjectGuard()
    )
}