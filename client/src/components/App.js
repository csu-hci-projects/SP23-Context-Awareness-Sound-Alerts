import {useState} from "react";
import Root from "../pages/Root";
import HearingTest from "../pages/hearingTest";
import DemographicForm from "../pages/demographicForm";
import Experiment from "../pages/experiment";


export default function App(){


    const [pageIndex, setPageIndex] = useState(0)
    const [experimentState, setExperimentState] = useState({"instance" : "aggregating data"})

    const context = {
        pageIndex: pageIndex,
        setPageIndex: (x) => setPageIndex(x),
        experimentState: experimentState,
        setExperimentState: (x) => setExperimentState(x),
        numPages: 4
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

    // Order that the pages will appear
    const pageOrder = [demographicsForm, root, hearingTest, demographicsForm, experiment]

    return(
        pageOrder[pageIndex].element
    )
}