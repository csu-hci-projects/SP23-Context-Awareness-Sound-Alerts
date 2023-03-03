import NextPageButton from "../components/NextPageButton";
import NavBar from "../components/NavBar";


export default function HearingTest(props){

    return(
        <div className={"App"}>
            <p>Administer initial hearing test?</p>
            <NavBar context={props.context}/>
        </div>
    )
}