import React, {useEffect, useState} from "react";
import Root from "../pages/Root";
import HearingTest from "../pages/hearingTest";
import DemographicForm from "../pages/demographicForm";
import Experiment from "../pages/experiment";
import subject from "../data/Subject";
import Export from "../pages/export";
import NavBar from "./NavBar";
import ExperimentController from "./experement-controller";


export default function App(){

    // Set the page to load first here, handy if you're working on a specific page
    // and don't want to have to click through every time it reloads.
    const [pageIndex, setPageIndex] = useState(0)
    const [experimentState, setExperimentState] = useState(undefined)

    useEffect(()=>{
        setExperimentState(new subject());
        console.log("New subject from App Component Mount");
    }, [])

    const context = {
        pageIndex: pageIndex,
        setPageIndex: (x) => setPageIndex(x),
        experimentState: experimentState,
        setExperimentState: (x) => setExperimentState(x),
        numPages: 5
    }

    // Routes
    const root = {
        name: "start",
        element: <Root context={context}/>
    }

    const hearingTest = {
        name: "hearingTest",
        element: <HearingTest context={context}/>
    }

    const demographicsForm = {
        name: "demographicsForm",
        element: <DemographicForm context={context}/>
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
        if(pageIndex == 3){
            // Temporary so we can watch data update live
            // return null
            return <NavBar context={context}/>
        } else {
            return <NavBar context={context}/>
        }
    }

    // Order that the pages will appear
    const pageOrder = [root, hearingTest, demographicsForm, experiment, exportData]

    return(
        <div className={"App"}>
            <div className={"content-container"}>
                {pageOrder[pageIndex].element}
            </div>
            {showNavBar()}
        </div>

    )
}