import React, {useState} from "react";
import Root from "../pages/Root";
import HearingTest from "../pages/hearingTest";
import DemographicForm from "../pages/demographicForm";
import Experiment from "../pages/experiment";
import subject from "./Subject";
import Export from "../pages/export";
import NavBar from "./NavBar";


export default function App(){


    const [pageIndex, setPageIndex] = useState(0)
    const [experimentState, setExperimentState] = useState(new subject())

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
        element: <Experiment context={context}/>
    }

    const exportData = {
        name: "export",
        element: <Export context={context}/>
    }

    // Order that the pages will appear
    const pageOrder = [root, hearingTest, demographicsForm, experiment, exportData]

    return(
        <div className={"App"}>
            {pageOrder[pageIndex].element}
            <NavBar context={context}/>
        </div>

    )
}