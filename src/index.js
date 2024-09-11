import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Landing, ContactMe, Install, Issue, Outline, Profiler101, Purpose, Disclaimer } from "./pages"
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
    path: "/optimizationPatterns",
    element: <div>so much todo</div>,
  },
  {
    path: "/contactMe",
    element: <ContactMe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div className='px-[20%] py-2'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
