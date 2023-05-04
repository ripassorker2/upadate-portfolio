import React from "react";
import Banner from "../Banner/Banner";
import Skils from "../Skils/Skils";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";

const Home = () => {
   return (
      <div>
         <Banner />
         <Services />
         <Skils />
         <About />
         <Contact />
      </div>
   );
};

export default Home;
