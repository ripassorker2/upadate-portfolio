import React, { useState } from "react";
import { useFieldArray, useForm, useController } from "react-hook-form";
import { AiOutlineArrowRight } from "react-icons/ai";

import { FiTrash } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
   const [category, setCategory] = useState("Front-end");
   const { handleSubmit, register, control, reset } = useForm();

   const navigate = useNavigate();

   const {
      fields: descriptionFields,
      append: descriptionAppend,
      remove: descriptionRemove,
   } = useFieldArray({ control, name: "description" });
   const {
      fields: techknologyFields,
      append: techknologyAppend,
      remove: techknologyRemove,
   } = useFieldArray({ control, name: "techknology" });

   const onSubmit = (data) => {
      data.projectType = category;

      fetch(`https://portfoliyo-server.vercel.app/project`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            navigate("/dashboard/all-project");
            console.log(result);
            reset();
         });
   };

   return (
      <div className=" w-[85%] cardAdd mx-auto overflow-y-auto mt-9 text-gray1">
         <form className=" max-w-4xl" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="w-full text-2xl text-gray2  mb-3">
               Add a new Project
            </h3>
            <div className="grid gap-4 gap-y-2  grid-cols-1 md:grid-cols-5">
               <div className="md:col-span-2 w-full">
                  <label className="mb-2" htmlFor="projectType">
                     Project Category
                  </label>
                  <select
                     type="text"
                     id="projectType"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     onChange={(e) => setCategory(e.target.value)}
                     placeholder="Select your category....."
                     required
                  >
                     <option value="Front-end">Front-end</option>
                     <option value="Full-stack">Full-stack</option>
                     <option value="Others">Others</option>
                  </select>
               </div>
               <div className="md:col-span-3 w-full">
                  <label className="mb-2" htmlFor="projectName">
                     Project Name
                  </label>
                  <input
                     type="text"
                     id="projectName"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     {...register("projectName")}
                     placeholder="Project name...."
                     required
                  />
               </div>
               <div className="md:col-span-3 w-full">
                  <label className="mb-2" htmlFor="picture1">
                     Project Image Link 1
                  </label>
                  <input
                     type="text"
                     id="picture1"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     {...register("picture1")}
                     placeholder=" Project Image Link 1...."
                     required
                  />
               </div>
               <div className="md:col-span-2 w-full">
                  <label className="mb-2" htmlFor="picture2">
                     Project Image Link 2
                  </label>
                  <input
                     type="text"
                     id="picture2"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     {...register("picture2")}
                     placeholder=" Project Image Link 2...."
                     required
                  />
               </div>
               <div className="md:col-span-2 w-full">
                  <label className="mb-2" htmlFor="picture3">
                     Project Image Link 3
                  </label>
                  <input
                     type="text"
                     id="picture3"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     {...register("picture3")}
                     placeholder=" Project Image Link 3...."
                     required
                  />
               </div>

               <div className="md:col-span-3 w-full">
                  <label className="mb-2" htmlFor="picture4">
                     Project Image Link 4
                  </label>
                  <input
                     type="text"
                     id="picture4"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     {...register("picture4")}
                     placeholder=" Project Image Link 4...."
                     required
                  />
               </div>

               <div className="md:col-span-3 w-full">
                  <label className="mb-2" htmlFor="liveLink">
                     Live Site Link
                  </label>
                  <input
                     type="text"
                     id="liveLink"
                     className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                     {...register("liveLink")}
                     placeholder="Live site  Link....."
                     required
                  />
               </div>

               {category !== "Clients" && (
                  <>
                     <div className="md:col-span-2 w-full">
                        <label className="mb-2" htmlFor="clientLink">
                           Client Site Code Link
                        </label>
                        <input
                           type="text"
                           id="clientLink"
                           className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                           {...register("clientLink")}
                           placeholder="Client site Code Link....."
                           required
                        />
                     </div>

                     <div className="md:col-span-2 w-full">
                        <label className="mb-2" htmlFor="serverLink">
                           Server Site Code Link
                        </label>
                        <input
                           type="text"
                           id="serverLink"
                           className=" block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                           {...register("serverLink")}
                           placeholder="Server site Code Link....."
                           required
                        />
                     </div>
                  </>
               )}

               <div className="md:col-span-3 w-full">
                  <label className="mb-2">Add used Techknology</label>
                  <div>
                     <div>
                        {techknologyFields.map((item, index) => {
                           return (
                              <div
                                 key={item.key}
                                 className="flex items-center gap-3 mb-5"
                              >
                                 <input
                                    className="block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                                    type="text"
                                    {...register(`techknology[${index}]`)}
                                 />
                                 <button
                                    type="button"
                                    onClick={() => techknologyRemove(index)}
                                    className="grid place-items-center rounded-full flex-shrink-0 text-gray2 border  h-10 w-10 group transition-all"
                                 >
                                    <FiTrash
                                       className=" transition-all"
                                       size={22}
                                    />
                                 </button>
                              </div>
                           );
                        })}
                     </div>
                     <div>
                        <button
                           type="button"
                           onClick={() => techknologyAppend("")}
                           className="inline-flex items-center text-gray1 font-semibold text-center justify-center   px-4 py-1.5 rounded shadow  hover:shadow-primary shadow-primary mr-5"
                        >
                           Techknology{" "}
                           <MdAdd className="font-bold text-2xl ml-1" />
                        </button>
                     </div>
                  </div>
               </div>
               <div className="md:col-span-3 w-full">
                  <label className="mb-2">Add Description</label>
                  <div>
                     <div>
                        {descriptionFields.map((item, index) => {
                           return (
                              <div
                                 key={item.key}
                                 className="flex items-center gap-3 mb-5"
                              >
                                 <input
                                    className="block w-full px-3 py-2 text-base border border-gray-900  bg-[#1a1919] bg-clip-padding focus:border focus:border-gray-600  rounded  text-gray1  focus:outline-none"
                                    type="text"
                                    {...register(`description[${index}]`)}
                                 />
                                 <button
                                    type="button"
                                    onClick={() => descriptionRemove(index)}
                                    className="grid place-items-center rounded-full flex-shrink-0 text-gray2 border  h-10 w-10 group transition-all"
                                 >
                                    <FiTrash
                                       className=" transition-all"
                                       size={22}
                                    />
                                 </button>
                              </div>
                           );
                        })}
                     </div>
                     <div>
                        <button
                           type="button"
                           onClick={() => descriptionAppend("")}
                           className="inline-flex items-center text-gray1 font-semibold text-center justify-center   px-4 py-1.5 rounded shadow  hover:shadow-primary shadow-primary mr-5"
                        >
                           Description
                           <MdAdd className="font-bold text-2xl ml-1" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex justify-end items-center w-full mt-3">
               <button
                  className="see-all1 inline-flex items-center"
                  type="submit"
               >
                  Submit{" "}
                  <AiOutlineArrowRight
                     size={20}
                     className="ml-2"
                  ></AiOutlineArrowRight>
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddProject;
