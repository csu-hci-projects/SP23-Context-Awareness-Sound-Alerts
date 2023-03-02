import NextPageButton from "./NextPageButton";
import PreviousPageButton from "./PreviousPageButton";

export default function NavBar(props){

    return(
        <div className={"navBar"}>
            <PreviousPageButton context={props.context}/>
            <NextPageButton context={props.context}/>
        </div>
    )
}