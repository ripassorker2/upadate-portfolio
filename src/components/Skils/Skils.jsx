import "./skill.css";
import html from "../../assets/html.webp";
import css from "../../assets/csss.png";
import javascript from "../../assets/javascript.png";
import Bootstrap from "../../assets/Bootstrap.png";
import Tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import ReactJS from "../../assets/React-icon.svg.png";
import firebase from "../../assets/firebase.png";
import mui from "../../assets/mui.png";
import nextjs from "../../assets/nextjs-boilerplate-logo.png";
import redux from "../../assets/redux.png";

import node from "../../assets/nodejspng.png";
import exprees from "../../assets/express-js.png";
import jwt from "../../assets/jwt.svg";
import AWS from "../../assets/Amazon_Web_Services_Logo.svg.png";
import SQL from "../../assets/sql.png";
import docker from "../../assets/docker.webp";
import postgre from "../../assets/Postgresql_elephant.svg.png";
import mongodb from "../../assets/mongodb.png";
import graphQl from "../../assets/GraphQL_Logo.svg.png";
import typescript from "../../assets/typescript.png";

import { Tooltip } from "react-tooltip";

const Skils = () => {
   return (
      <div className=" pt-28 sm:pl-9 pl-8 relative" id="skills">
         <div className="md:pb-20 md:mb-0 -mb-9 -ml-5 md:ml-auto">
            <h4 className="title">My Skills</h4>
            <h3 className="font-semibold  md:text-xl text-lg mb-2 text-center text-gray-400">
               {"<-~-"} Some technology thai i know! {"-~->"}
            </h3>
         </div>
         <div className="grid md:grid-cols-2 relative container">
            <div className="flex min-h-[400px]  items-center justify-center">
               <div className="">
                  <Tooltip
                     id="html"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={html}
                     className="html lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="html"
                     data-tooltip-content="HTML5"
                  />
                  <Tooltip
                     id="css"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={css}
                     className="css lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="css"
                     data-tooltip-id="css"
                     data-tooltip-content="CSS3"
                  />
                  <Tooltip
                     id="javascript"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={javascript}
                     className="javascript lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="javascript"
                     data-tooltip-id="javascript"
                     data-tooltip-content="JavaScript"
                  />
                  <Tooltip
                     id="Bootstrap"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={Bootstrap}
                     className="Bootstrap lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="Bootstrap"
                     data-tooltip-id="Bootstrap"
                     data-tooltip-content="Bootstrap"
                  />
                  <Tooltip
                     id="Tailwind"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={Tailwind}
                     className="Tailwind lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="Tailwind"
                     data-tooltip-id="Tailwind"
                     data-tooltip-content="Tailwind CSS"
                  />
                  <Tooltip
                     id="ReactJS"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={ReactJS}
                     className="ReactJS lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="ReactJS"
                     data-tooltip-id="ReactJS"
                     data-tooltip-content="React JS"
                  />
                  <Tooltip
                     id="firebase"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={firebase}
                     className="firebase lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="firebase"
                     data-tooltip-id="firebase"
                     data-tooltip-content="Firebase"
                  />
                  <Tooltip
                     id="mui"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={mui}
                     className="mui lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="mui"
                     data-tooltip-id="mui"
                     data-tooltip-content="Material-UI"
                  />
                  <Tooltip
                     id="nextjs"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={nextjs}
                     className="nextjs lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt="nextjs"
                     data-tooltip-id="nextjs"
                     data-tooltip-content="Next Js"
                  />
                  <Tooltip
                     id="redux"
                     place="bottom"
                     className="absolute text-gray1"
                  />

                  <img
                     src={redux}
                     className="redux lg:h-[50px] md:h-[45px] h-[35px]  absolute"
                     alt="redux"
                     data-tooltip-id="redux"
                     data-tooltip-content="Redux"
                  />
                  <h4 className="text">Frontend</h4>
               </div>
            </div>
            <div className="min-h-[400px] flex  items-center justify-center">
               <div className="">
                  <Tooltip
                     id="node"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={node}
                     className="node lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="node"
                     data-tooltip-content="Node Js"
                  />
                  <Tooltip
                     id="exprees"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={exprees}
                     className="exprees lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="exprees"
                     data-tooltip-content="Express Js"
                  />
                  <Tooltip
                     id="mongodb"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={mongodb}
                     className="mongodb lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="mongodb"
                     data-tooltip-content="MongoDB"
                  />
                  <Tooltip
                     id="graphQl"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={graphQl}
                     className="graphQl lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="graphQl"
                     data-tooltip-content="GraphQL "
                  />
                  <Tooltip
                     id="typescript"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={typescript}
                     className="typescript lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="typescript"
                     data-tooltip-content="Typescript"
                  />
                  <Tooltip
                     id="jwt"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={jwt}
                     data-tooltip-id="jwt"
                     data-tooltip-content="Json Web Token"
                     className="jwt lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                  />
                  <Tooltip
                     id="postgre"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={postgre}
                     className="postgre lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="postgre"
                     data-tooltip-content="PostgreSQL"
                  />
                  <Tooltip
                     id="SQL"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={SQL}
                     className="SQL lg:h-[50px] md:h-[45px] h-[35px] absolute"
                     alt=""
                     data-tooltip-id="SQL"
                     data-tooltip-content="SQL"
                  />
                  <Tooltip
                     id="AWS"
                     place="bottom"
                     className="absolute text-gray1"
                  />
                  <img
                     src={AWS}
                     className="AWS lg:h-[50px] md:h-[45px] h-[35px] w-[55px] absolute"
                     alt=""
                     data-tooltip-id="AWS"
                     data-tooltip-content="Amazon Web Service"
                  />
                  <Tooltip
                     id="docker"
                     place="bottom"
                     className="absolute text-gray1"
                  />

                  <img
                     src={docker}
                     className="docker lg:h-[50px] md:h-[45px] h-[35px]  absolute"
                     alt=""
                     data-tooltip-id="docker"
                     data-tooltip-content="Docker"
                  />
                  <h4 className="text">Backend</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skils;
