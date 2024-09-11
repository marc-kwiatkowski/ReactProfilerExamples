import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  // useNavigate,
  // useLocation,
} from "react-router-dom";
import { Landing, ContactMe, Install, Issue, Outline, Profiler101, Purpose } from "./pages"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
    path: "/patternsToBeOptimized",
    element: <div>so much todo</div>,
  },
  {
    path: "/contactMe",
    element: <ContactMe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// const navigate = useNavigate();
// const location = useLocation();
// console.log(location)
// const goToPage = (path) => {
//   navigate(path);
// };

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
