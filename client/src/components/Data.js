
export default function Data(props){

    return(
        <div className={"data"}>
            <p>experiment data:</p>
            <p>Gender: {props.subject.gender ? props.subject.gender : null}</p>
            <p>Age: {props.subject.age ? props.subject.age : null}</p>
            <p>Computer Use: {props.subject.computerUse ? props.subject.computerUse : null}</p>
            <p>Group ID: {props.subject.groupID ? props.subject.groupID : null}</p>
        </div>
    )
}