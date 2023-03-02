import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root expiriment={experimentState}/>,
//         errorElement: <ErrorPage/>
//     },
//     {
//         path: "hearingTest",
//         element: <HearingTest expiriment={experimentState}/>,
//     },
//     {
//         path: "experiment",
//         element: <Experiment expiriment={experimentState}/>
//     },
//     {
//         path: "demographicForm",
//         element: <DemographicForm expiriment={experimentState}/>
//     }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
