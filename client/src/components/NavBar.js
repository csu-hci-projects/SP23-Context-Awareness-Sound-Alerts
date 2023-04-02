import NextPageButton from "./NextPageButton";
import PreviousPageButton from "./PreviousPageButton";
import Data from "./Data";
import React from "react";

export default function NavBar(props){

    return(
        <div className={"navBar"}>
            <PreviousPageButton context={props.context}/>
            <NextPageButton context={props.context}/><br/>
            <Data subject={props.context.experimentState} context={props.context}/>
        </div>
    )
}