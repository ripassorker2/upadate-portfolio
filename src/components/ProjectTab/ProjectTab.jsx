import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import img from "../../assets/rifat.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
const ProjectTab = () => {
   const [selectedIndex, setSelectedIndex] = useState(0);

   return (
      <div>
         <Tab.Group>
            <Tab.List className={"grid md:grid-cols-4 grid-cols-2 "}>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Full Stack
                     </button>
                  )}
               </Tab>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Frontend
                     </button>
                  )}
               </Tab>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Practice
                     </button>
                  )}
               </Tab>
               <Tab as={Fragment}>
                  {({ selected }) => (
                     <button
                        className={`${
                           selected
                              ? "inline-flex bg-primary text-black"
                              : " inline-flex text-gray1  "
                        } font-semibold text-center justify-center focus:outline-none items-center w-full px-4 py-2  shadow  hover:shadow-primary shadow-primary`}
                     >
                        Client
                     </button>
                  )}
               </Tab>
               {/* ...  */}
            </Tab.List>
            <Tab.Panels>
               <Tab.Panel className={"mt-10"}>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                  </div>
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                  </div>
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                  </div>
               </Tab.Panel>
               <Tab.Panel className={"mt-10"}>
                  <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                     <div className="card  relative">
                        <figure className="h-[230px] w-full overflow-hidden">
                           <img
                              src={img}
                              className=" rounded-lg duration-500 h-full w-full overflow-hidden "
                              alt=""
                           />
                        </figure>
                        <a
                           className="absolute top-7 right-7 z-50"
                           href={""}
                           target={"_blank"}
                        >
                           <BiWorld
                              size={25}
                              className="bg-slate-300 rounded-full "
                           />
                        </a>
                        <div className="mt-3">
                           <h4 className="text-gray2 text-2xl">
                              Web Development
                           </h4>
                           <p className="text-gray1 text-lg">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Voluptate nemo incidunt
                              assumenda ipsum molestias.
                           </p>
                           <button className="inline-flex mt-2 text-gray1 text-center justify-center items-center w-full px-4 py-2 rounded shadow hover:shadow-primary shadow-primary ">
                              Details{" "}
                              <AiOutlineArrowRight size={20} className="ml-2" />
                           </button>
                        </div>
                     </div>
                  </div>
               </Tab.Panel>
            </Tab.Panels>
         </Tab.Group>
      </div>
   );
};

export default ProjectTab;
