
export default function Data(props){

    return(
        <div className={"data"}>
            <u>experiment data:</u>
            <p>Gender: {props.subject.gender ? props.subject.gender : null}</p>
            <p>Age: {props.subject.age ? props.subject.age : null}</p>
            <p>Computer Use: {props.subject.computerUse ? props.subject.computerUse : null}</p>
            <p>Group ID: {props.subject.groupID ? props.subject.groupID : null}</p>
            <p>Assigned Experiment: {props.subject.assignedExperiment ? props.subject.assignedExperiment : null}</p>
            <p>WPMs: {props.subject.wpm}</p>
            <p>Clicks: {props.subject.actions}</p>
        </div>
    )
}