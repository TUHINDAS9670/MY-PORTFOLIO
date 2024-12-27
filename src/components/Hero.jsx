import React from "react";
import { TypeAnimation } from "react-type-animation";
import mypic from '../assets/mypic2.png'
import resume from'../assets/TUHIN_DAS_SDE_Resume.pdf'

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1500px]  mx-auto mb-8 md:mb-32 mt-14">
      <div className="w-[590px] ">
        <p className="text-gray-200 md:text-5xl  text-2xl ">
          Hey, I Am <br />
          <span >TUHIN DAS</span>
          <br />
          <TypeAnimation 
          sequence={
            ["Fullstack Web Developer",
              1000,
              "Software Engineer",
              1000,
              "Freelancer",
              1000
            ]
          }
          speed={50}
          repeat={Infinity}
          className="font-bold italic text-yellow-300"/>
        </p>
        <div className="flex flex-row gap-5 mb-5 md:mb-1">
          <button  className=" transform transition-transform hover:scale-105 
          z-10 font-bold text-gray-600 w-1/2 mt-6 p-2 rounded-xl hover:bg-blue-400 hover:text-white bg-slate-50  " ><a href={resume}download='resume' >Download CV</a></button>
          <button className="transform transition-transform hover:scale-105  z-10 font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl">View Work</button>
        </div>
      </div>
      <img src={mypic} className="w-[300px]  md:w-[500px] rounded-full shadow-xl shadow-amber-200 " />
    </div>
  );
};

export default Hero;
