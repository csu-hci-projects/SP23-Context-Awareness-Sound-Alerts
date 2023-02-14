import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/Root';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import HearingTest from "./routes/hearingTest";
import Experiment from "./routes/experiment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "hearingTest",
        element: <HearingTest/>,
    },
    {
        path: "experiment",
        element: <Experiment/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
