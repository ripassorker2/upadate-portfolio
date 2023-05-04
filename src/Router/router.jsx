import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../components/Home/Home";
import Project from "../components/Project/Project";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/projects", element: <Project /> },
      ],
   },
]);
