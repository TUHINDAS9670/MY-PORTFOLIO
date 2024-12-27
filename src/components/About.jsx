import React from "react";
import BLOGTD from "../assets/BLOGTD.png";
import MEETAPP from "../assets/MEETAPP.png";
import TODO from "../assets/TODO.png";
import TICTACTOE from "../assets/TICTACTOE.png";
import TuhinDas from "../assets/TuhinDas.png";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiPostman, SiExpress ,SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <div className=" md:hidden bg-white bg-opacity-10 rounded-lg p-6 flex flex-wrap gap-9 justify-center  text-4xl">
        <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
        <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
        <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
        <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
        <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
        <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
      </div>
      <div className="relative group ">
        <div className="w-full h-full absolute bg-gradient-to-r from-yellow-100 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg">
          <img
            src={TuhinDas}
            alt="intro pic"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4  ">
          Introduction
        </h2>
        <p className="text-gray-300 mb-4">
          Hello! I am <span className="text-yellow-200">Tuhin Das</span>, a
          passionate and driven full-stack web developer with proficiency in
          HTML, JavaScript, Tailwind, React.js, Postman, PostgreSQL, Node.js,
          MongoDB, and Express. With a solid understanding of data structures
          and algorithms, I have honed my skills through hands-on projects and
          continuous learning. As a recent graduate and aspiring software
          engineer, I have created several front-end projects that showcase my
          ability to build responsive, user-friendly web applications. I am
          eager to contribute to innovative development teams and grow my
          expertise in the industry. Let's build something amazing together!
        </p>
        {/* <div className="md:flex flex-wrap gap-4 text-4xl justify-center p-6 hidden">
          <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
          <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
          <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
          <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
          <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
          <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
        </div> */}
      </div>

      {/* skillset */}
     
        <div className="p-6">
          <h2 className="text-gray-200 text-3xl font-bold mb-4  ">
            Frontend Experience
          </h2>
          <p className="text-gray-300 mb-4">
            Experienced in creating modern,responsive web applications using the
            latest frontend technologies
          </p>
          <div className="md:flex flex gap-4 text-4xl justify-center p-6">
            <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
            <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
            <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
            <SiTailwindcss  className="text-blue-800 transform transition-transform hover:scale-125 " />

            <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
            <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
            <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-gray-200 text-3xl font-bold mb-4  ">
           Backend Experience
          </h2>
          <p className="text-gray-300 mb-4">
            Experienced in creating modern,responsive web applications using the
            latest frontend technologies
          </p>
          <div className="md:flex flex gap-4 text-4xl justify-center p-6 ">
            <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125  " />
            <SiMongodb className="text-green-600 transform transition-transform hover:scale-125 " />
            <SiExpress className="text-black transform transition-transform hover:scale-125 " />
            <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
            <SiPostman className="text-orange-500 transform transition-transform hover:scale-125 " />
            
          </div>
        </div>
    

      {/* ---------------------------------------------- */}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4  ">Skills</h2>
        <p className="text-gray-300 mb-4">
          Hello! I am <span className="text-yellow-200">Tuhin Das</span>, a
          passionate and driven full-stack web developer with proficiency in
          HTML, JavaScript, Tailwind, React.js, Postman, PostgreSQL, Node.js,
          MongoDB, and Express. With a solid understanding of data structures
          and algorithms, I have honed my skills through hands-on projects and
          continuous learning. As a recent graduate and aspiring software
          engineer, I have created several front-end projects that showcase my
          ability to build responsive, user-friendly web applications. I am
          eager to contribute to innovative development teams and grow my
          expertise in the industry. Let's build something amazing together!
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center p-6 hidden">
          <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
          <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
          <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
          <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
          <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
          <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
        </div>
      </div>
      <div className="relative group ">
        <div className="w-full h-full absolute bg-gradient-to-r from-yellow-100 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg">
          <img
            src={BLOGTD}
            alt="intro pic"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
      {/* ------------------------------------------ */}
      <div className="relative group ">
        <div className="w-full h-full absolute bg-gradient-to-r from-yellow-100 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg">
          <img
            src={MEETAPP}
            alt="intro pic"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4  ">Skills</h2>
        <p className="text-gray-300 mb-4">
          Hello! I am <span className="text-yellow-200">Tuhin Das</span>, a
          passionate and driven full-stack web developer with proficiency in
          HTML, JavaScript, Tailwind, React.js, Postman, PostgreSQL, Node.js,
          MongoDB, and Express. With a solid understanding of data structures
          and algorithms, I have honed my skills through hands-on projects and
          continuous learning. As a recent graduate and aspiring software
          engineer, I have created several front-end projects that showcase my
          ability to build responsive, user-friendly web applications. I am
          eager to contribute to innovative development teams and grow my
          expertise in the industry. Let's build something amazing together!
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center p-6 hidden">
          <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
          <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
          <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
          <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
          <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
          <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
        </div>
      </div>

      {/* ---------------------------------------------- */}
      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4  ">Skills</h2>
        <p className="text-gray-300 mb-4">
          Hello! I am <span className="text-yellow-200">Tuhin Das</span>, a
          passionate and driven full-stack web developer with proficiency in
          HTML, JavaScript, Tailwind, React.js, Postman, PostgreSQL, Node.js,
          MongoDB, and Express. With a solid understanding of data structures
          and algorithms, I have honed my skills through hands-on projects and
          continuous learning. As a recent graduate and aspiring software
          engineer, I have created several front-end projects that showcase my
          ability to build responsive, user-friendly web applications. I am
          eager to contribute to innovative development teams and grow my
          expertise in the industry. Let's build something amazing together!
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center p-6 hidden">
          <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
          <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
          <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
          <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
          <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
          <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
        </div>
      </div>
      <div className="relative group ">
        <div className="w-full h-full absolute bg-gradient-to-r from-yellow-100 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg">
          <img
            src={TODO}
            alt="intro pic"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      {/* ------------------------------------------ */}
      <div className="relative group ">
        <div className="w-full h-full absolute bg-gradient-to-r from-yellow-100 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 duration-300"></div>
        <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg">
          <img
            src={TICTACTOE}
            alt="intro pic"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-gray-200 text-3xl font-bold mb-4  ">Skills</h2>
        <p className="text-gray-300 mb-4">
          Hello! I am <span className="text-yellow-200">Tuhin Das</span>, a
          passionate and driven full-stack web developer with proficiency in
          HTML, JavaScript, Tailwind, React.js, Postman, PostgreSQL, Node.js,
          MongoDB, and Express. With a solid understanding of data structures
          and algorithms, I have honed my skills through hands-on projects and
          continuous learning. As a recent graduate and aspiring software
          engineer, I have created several front-end projects that showcase my
          ability to build responsive, user-friendly web applications. I am
          eager to contribute to innovative development teams and grow my
          expertise in the industry. Let's build something amazing together!
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center p-6 hidden">
          <FaHtml5 className="text-orange-600 transform transition-transform hover:scale-125  " />
          <FaCss3 className="text-blue-600 transform transition-transform hover:scale-125 " />
          <FaBootstrap className="text-purple-600 transform transition-transform hover:scale-125 " />
          <FaJs className="text-yellow-600 transform transition-transform hover:scale-125 " />
          <FaReact className="text-blue-500 transform transition-transform hover:scale-125 " />
          <FaNodeJs className="text-green-600 transform transition-transform hover:scale-125 " />
        </div>
      </div>
    </div>
  );
};

export default About;
