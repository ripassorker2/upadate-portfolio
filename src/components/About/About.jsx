import React from "react";
import rifat from "../../assets/rifat.jpg";
import Resume from "../Resume/Resume";

const About = () => {
   return (
      <section className="md:pt-36 pt-16  " id="about">
         <div className="container">
            <div>
               <h4 className="title">About Me</h4>
               <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray1">
                  {"<-~-"} Some information about me! {"-~->"}
               </h3>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 place-content-center mt-8 ">
               <div>
                  <img
                     src={rifat}
                     alt=""
                     className="bg-contain rounded-xl md:w-[90%] w-full max-h-[450px] "
                  />
               </div>
               <div className="flex items-center justify-center ">
                  <div className=" md:p-2 rounded-sm ">
                     <p className="mt-6 mb-5 md:text-lg text-gray1">
                        Hello! I am Md Ripas Sorker Rifat. I am twenty years
                        old. I am doing my Bachelor in Dhaka International
                        University right now. I am passionate about entering the
                        world of websites and contributing towards making a
                        social impact on users. I have been following various
                        technology magazines and pages to escalate my growth and
                        understanding of this field. I believe in evolving my
                        knowledge and learning continuously every day.
                     </p>

                     <div className="flex flex-col space-y-4 sm:flex-row  md:justify-start">
                        <Resume />{" "}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
