import {useState} from "react";
import Root from "../routes/Root";
import HearingTest from "../routes/hearingTest";
import DemographicForm from "../routes/demographicForm";
import Experiment from "../routes/experiment";


export default function App(){


    const [pageIndex, setPageIndex] = useState(0)
    const experimentState = useState({"instance" : "aggregating data"})

    const context = {
        pageIndex: () => pageIndex,
        setPageIndex: () => setPageIndex(),

    }

    // Routes
    const root = {
        name: "start",
        element: <Root expiriment={[pageIndex, setPageIndex]}/>
    }

    const hearingTest = {
        name: "hearingTest",
        element: <HearingTest expiriment={[pageIndex, setPageIndex]}/>
    }

    const demographicsForm = {
        name: "demographicsForm",
        element: <DemographicForm expiriment={[pageIndex, setPageIndex]}/>
    }

    const experiment = {
        name: "experiment",
        element: <Experiment expiriment={[pageIndex, setPageIndex]}/>
    }

    const pageOrder = [root, hearingTest, demographicsForm, experiment]

    return(
        pageOrder[pageIndex].element
    )
}