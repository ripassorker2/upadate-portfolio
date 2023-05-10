import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../components/Home/Home";
import Project from "../components/Project/Project";
import Dashboard from "../Loyout/Dashboard";
import Welcome from "../components/Dashboard/Welcome/Welcome";
import AddProject from "../components/Dashboard/AddProject/AddProject";
import AllProject from "../components/Dashboard/AllProject/AllProject";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/projects", element: <Project /> },
      ],
   },
   {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
         { path: "/dashboard/welcome", element: <Welcome /> },
         { path: "/dashboard/add-project", element: <AddProject /> },
         { path: "/dashboard/all-project", element: <AllProject /> },
      ],
   },
]);
