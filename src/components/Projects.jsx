import React, { useState } from "react";
import BLOGTD from "../assets/BLOGTD.png";
import MEETAPP from "../assets/MEETAPP.png";
import TODO from "../assets/TODO.png";
import TICTACTOE from "../assets/TICTACTOE.png";
import MYTEXTMANIPULATOR from "../assets/MYTEXTMANIPULATOR.png";

import { FaGithub, } from "react-icons/fa";

const projects = [

  {
    img: MYTEXTMANIPULATOR,
    title: " MY TEXT MANIPULATOR",
    description:
      " A visually appealing and user-friendly blog platform built with React JS and styled using Tailwind CSS.",
    links: {
      site: "https://my-text-manipulator.vercel.app/",
      github: "https://github.com/TUHINDAS9670/MyTextManipulator",
    },
  },
  {
    img: BLOGTD,
    title: " Modern Blog Website",
    description:
      " A visually appealing and user-friendly blog platform built with React JS and styled using Tailwind CSS.",
    links: {
      site: "#",
      github: "https://github.com/TUHINDAS9670/MODERN-BLOG-WEBSITE",
    },
  },
  {
    img: MEETAPP,
    title: "Video Call Application",
    description:
      "A real-time video calling application built using React and ZEGOCLOUD Video Call API to facilitate seamless virtual communication. ",
    links: {
      site: "https://video-call-app-topaz.vercel.app/",
      github: "https://github.com/TUHINDAS9670/video-call-app",
    },
  },
  {
    img: TODO,
    title: "To-Do Application App",
    description:
      "  A task management application to organize daily activities. ",
    links: {
      site: "https://todo-app-seven-teal.vercel.app/",
      github: "https://github.com/TUHINDAS9670/TODO-APP",
    },
  },
  { img: TICTACTOE,  
     title: "  Tic Tac Toe Game App",
    description:
      " : A classic two-player game implemented with an interactive UI.",
    links: {
      site: "https://tic-tac-toe-virid-omega.vercel.app/",
      github: "https://github.com/TUHINDAS9670/TIC-TAC-TOE",
    },
  },
  
];

const Projects = () => {
  const [currentProject,setCurrentProject]=useState(0)
  return (<div className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row" id="projects">

    <div className="glass p-6 w-full border-2 max-w-[600px]">
<div>
  <img src={projects[currentProject].img} alt={projects[currentProject].title}className="h-full w-full rounded-lg object-cover mb-4" />
</div>
<p className="text-gray-300 my-4">{projects[currentProject].description}</p>
<div className="flex space-x-5">
  <a href={projects[currentProject].links.site} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transform transition-transform hover:scale-90 duration-300">View Site</a>
  <a href={projects[currentProject].links.github} className="text-4xl text-white transform transition-transform hover:scale-90 duration-300"><FaGithub /></a>
</div>
    </div>
    <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1 space-y-1">
      {
        projects.map((project,index)=>(
          <li key={index} onClick={()=>setCurrentProject(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[1300px] hover:bg-slate-800 transition duration-300 ${currentProject===index? "bg-slate-900":""}`}>{project.title} </li>
        ))
      } 
    </ul>
  </div>);
};

export default Projects;
