import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
   useEffect(() => {
      AOS.init({ duration: 500 });
   }, []);
   return (
      <div className="">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
};

export default App;
