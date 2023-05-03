import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [{ path: "/", element: <Home /> }],
   },
]);
