import React from "react";
import rifat from "../../assets/rifat.jpg";
import Resume from "../Resume/Resume";

const About = () => {
   return (
      <section
         className="md:pt-24 pt-16  max-w-[1440px]  w-[90%] mx-auto"
         id="about"
      >
         <h4 className="md:text-5xl  mb-2 text-3xl text-[#0dccf2] font-bold text-center">
            About Me
         </h4>
         <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
            {"<-~-"} Some information about me {"-~->"}
         </h3>
         <div className=" grid grid-cols-1 md:grid-cols-2 place-content-center mt-8 ">
            <div data-aos="fade-left">
               <img
                  src={rifat}
                  alt=""
                  className="bg-contain rounded-xl md:w-[80%] mx-auto max-h-[400px] "
               />
            </div>
            <div className="flex items-center justify-center ">
               <div data-aos="fade-right" className=" md:p-3 rounded-sm ">
                  <p className="mt-6 mb-5 md:text-lg text-gray1  md:pr-8">
                     Hello! I am Md Ripas Sorker Rifat. I am twenty years old. I
                     am doing my Bachelor in Dhaka International University
                     right now. I am passionate about entering the world of
                     websites and contributing towards making a social impact on
                     users. I have been following various technology magazines
                     and pages to escalate my growth and understanding of this
                     field. I believe in evolving my knowledge and learning
                     continuously every day.
                  </p>

                  <div className="flex flex-col space-y-4 sm:flex-row  md:justify-start">
                     <Resume />{" "}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
