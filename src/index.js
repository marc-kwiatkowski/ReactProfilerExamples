import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Landing, ContactMe, Install, Issue, Outline, 
  Profiler101, Purpose, Disclaimer, OptimizationPattern1, 
  MoreDisclaimer, OptimizationPattern1Solution, BeforeWeProceed, OptimizationPattern2,
  OptimizationPattern2Solution } from "./pages"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
  },
  {
    path: "/outline",
    element: <Outline />,
  },
  {
    path: "/purpose",
    element:<Purpose />,
  },
  {
    path: "/install",
    element: <Install />,
  },
  {
    path: "/profiler101",
    element: <Profiler101 />,
  },
  {
    path: "/issue",
    element: <Issue />,
  },
  {
    path: "/beforeWeProceed",
    element: <BeforeWeProceed />,
  },
  {
    path: "/optimizationPattern1",
    element: <OptimizationPattern1 />,
  },
  {
    path: "/optimizationPattern1Solution",
    element: <OptimizationPattern1Solution />,
  },
  {
    path: "/moreDisclaimer",
    element: <MoreDisclaimer />,
  },
  {
    path: "/optimizationPattern2",
    element: <OptimizationPattern2 />,
  },
  {
    path: "/optimizationPattern2Solution",
    element: <OptimizationPattern2Solution />,
  },
  {
    path: "/moreDisclaimer",
    element: <MoreDisclaimer />,
  },
  {
    path: "/contactMe",
    element: <ContactMe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

//avoiding page shift when scrollbar appear
const paddingLeft = { paddingLeft: "calc(100vw - 100% + 20%)", paddingRight: "20%" }
root.render(
  <React.StrictMode>
    <div className='pr-[20%] py-2' style={paddingLeft}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
