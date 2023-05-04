import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm(
            "service_se7rivo",
            "template_b941elg",
            form.current,
            "udGj2_-JvXBkCXsxX"
         )
         .then(
            (result) => {
               console.log(result.text);
               e.target.reset();
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   return (
      <section className="  md:pt-28 pt-20" id="contact">
         <div className="container">
            <div>
               <h4 className="title">Contact With Me</h4>
               <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
                  {"<-~-"} If you have any queries? {"-~->"}
               </h3>
            </div>
            <div className=" text-gray-800  pt-6">
               <div className=" ">
                  <div className="grid md:grid-cols-2">
                     <div className=" basis-auto w-full md:pr-3  mb-12 xl:mb-0">
                        <form
                           ref={form}
                           onSubmit={sendEmail}
                           className=" rounded-x"
                        >
                           <div className="form-group mb-6">
                              <input
                                 type="text"
                                 name="user_name"
                                 className="form-control block w-full px-3 py-2 text-base font-normal bg-[#1a1919] bg-clip-padding border border-solid border-gray-800 rounded  text-gray-200 focus:bg-[#1a1919] focus:outline-none"
                                 placeholder="Name"
                              />
                           </div>
                           <div className="form-group mb-6">
                              <input
                                 type="email"
                                 name="user_email"
                                 className="form-control block w-full px-3 py-2 text-base font-normal bg-[#1a1919] bg-clip-padding border border-solid border-gray-800 rounded  text-gray-200 focus:bg-[#1a1919]  focus:outline-none"
                                 placeholder="Email address"
                              />
                           </div>
                           <div className="form-group mb-6">
                              <textarea
                                 name="message"
                                 className="
                      form-control block w-full px-3 py-1.5 text-base font-normal bg-[#1a1919] bg-clip-padding border border-solid border-gray-800 rounded  text-gray-200 focus:bg-[#1a1919]  focus:outline-none"
                                 rows="3"
                                 placeholder="Message"
                              ></textarea>
                           </div>
                           <button
                              type="submit"
                              className="inline-flex text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-md hover:shadow-primary shadow-primary  "
                           >
                              Submit
                           </button>
                        </form>
                     </div>
                     <div className=" w-full md:pl-3">
                        <div className="flex flex-wrap">
                           <div className="mb-12  basis-auto w-full md:w-6/12 ">
                              <div className="flex items-start">
                                 <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow shadow-primary md:w-14 md:h-14 h-11 w-11 flex items-center justify-center">
                                       <MdEmail className="text-gray2 text-5xl " />
                                    </div>
                                 </div>
                                 <div className="grow ml-6">
                                    <p className="font-bold text-gray2 mb-1">
                                       Email
                                    </p>
                                    <p className="text-gray1 flex-wrap overflow-hidden">
                                       ripassorkerrifat@gmail.com
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div className="mb-12 md:mb-0  basis-auto w-full md:w-6/12 ">
                              <div className="flex align-start">
                                 <div className="shrink-0">
                                    <div className="p-4 rounded-md shadow shadow-primary md:w-14 md:h-14 h-11 w-11 flex items-center justify-center">
                                       <BsTelephoneFill className="text-gray2 text-5xl" />
                                    </div>
                                 </div>
                                 <div className="grow ml-6">
                                    <p className="font-bold text-gray2 mb-1">
                                       Phone Number
                                    </p>
                                    <p className="text-gray1">
                                       +880 1744876681
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="mb-12  basis-auto w-full md:w-6/12 ">
                              <div className="flex items-start">
                                 <div className="shrink-0">
                                    <a
                                       href="https://www.linkedin.com/in/md-ripas-ali-b42a01257/"
                                       target={"_blank"}
                                       className="p-4    rounded-md shadow shadow-primary md:w-14 md:h-14 h-11 w-11 flex items-center justify-center"
                                    >
                                       <BsLinkedin className="text-gray2 text-5xl" />
                                    </a>
                                 </div>
                                 <div className="grow ml-6">
                                    <p className="font-bold mb-1 text-gray2">
                                       Linkedin
                                    </p>
                                    <a
                                       href="https://www.linkedin.com/in/md-ripas-ali-b42a01257/"
                                       target={"_blank"}
                                       className="text-gray-200 w-full"
                                    >
                                       Linkedin profile
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className=" basis-auto w-full md:w-6/12 ">
                              <div className="flex align-start">
                                 <div className="shrink-0">
                                    <div className="p-4    rounded-md shadow shadow-primary md:w-14 md:h-14 h-11 w-11 flex items-center justify-center">
                                       <MdLocationOn className="text-gray2 text-5xl" />
                                    </div>
                                 </div>
                                 <div className="grow ml-6">
                                    <p className="font-bold text-gray2 mb-1">
                                       Location
                                    </p>
                                    <p className="text-gray1">
                                       Panchagarh,Rajshahi Bangladesh
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
