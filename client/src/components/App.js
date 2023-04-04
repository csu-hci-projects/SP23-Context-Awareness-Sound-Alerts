import React, {useEffect, useState} from "react";
import Root from "../pages/Root";
import TaskDescription from "../pages/taskDescription";
import DemographicForm from "../pages/demographicForm";
import subject from "../data/Subject";
import Export from "../pages/export";
import NavBar from "./NavBar";
import ExperimentController from "./experement-controller";
import DebugButton from "./DebugButton";
import SampleTask from "../pages/SampleTask";


export default function App(){

    // Set the page to load first here, handy if you're working on a specific page
    // and don't want to have to click through every time it reloads.
    const [pageIndex, setPageIndex] = useState(0);
    const [experimentState, setExperimentState] = useState(()=>new subject(undefined, undefined));
    const [debug, setDebug] = useState(true);

    const context = {
        pageIndex: pageIndex,
        setPageIndex,
        experimentState,
        setExperimentState,
        debug,
        setDebug
    }

    const root = {
        name: "start",
        element: <Root context={context}/>
    }

    const taskDescription = {
        name: "hearingTest",
        element: <TaskDescription context={context}/>
    }

    const demographicsForm = {
        name: "demographicsForm",
        element: <DemographicForm context={context}/>
    }

    const sampleTask = {
        name: "sampleTask",
        element: <SampleTask context={context}/>
    }

    const experiment = {
        name: "experiment",
        element: <ExperimentController context={context}/>
    }

    const exportData = {
        name: "export",
        element: <Export context={context}/>
    }

    // We don't want to show the nav bar during the experiment
    const showNavBar = ()=> {
        if(pageIndex == 5){
            return debug ? <NavBar context={context}/> : null
        } else {
            return <NavBar context={context}/>
        }
    }

    // Order that the pages will appear
    const pageOrder = [
        root, demographicsForm, taskDescription, sampleTask, prepExpStart,
        experiment, exportData];

    context.numPages = pageOrder.length;

    return(
        <div className={"App"}>
            <div className={"content-container"}>
                {pageOrder[pageIndex].element}
            </div>
            {showNavBar()}
            <DebugButton context={context}/>
        </div>

    )
}