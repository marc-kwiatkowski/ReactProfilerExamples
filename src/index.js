import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Landing, ContactMe, Install, Issue, Outline, 
  Profiler101, Purpose, Disclaimer, OptimizationPattern1, 
  MoreDisclaimer, OptimizationPattern1Solution, BeforeWeProceed, OptimizationPattern2,
  OptimizationPattern2Solution, OptimizationPattern3, OptimizationPattern3Solution,
  OptimizationPattern4, OptimizationPattern4Solution } from "./pages"
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
    path: "/optimizationPattern3",
    element: <OptimizationPattern3 />,
  },
  {
    path: "/optimizationPattern3Solution",
    element: <OptimizationPattern3Solution />,
  },
  {
    path: "/optimizationPattern4",
    element: <OptimizationPattern4 />,
  },
  {
    path: "/optimizationPattern4Solution",
    element: <OptimizationPattern4Solution />,
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
  <div className='pr-[20%] py-2 overflow-auto' style={paddingLeft} id="scrollRoot">
    <div className='overflow-hidden'>
    <RouterProvider router={router} />
    </div>
  </div>
);
