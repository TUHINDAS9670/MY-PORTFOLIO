import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="flex text-2xl justify-between text-gray-200 items-center px-6 max-w-[1300px] mx-auto h-24">
      <a  className="text-yellow-300 text-4xl">Tuhin Das </a>
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500} >About</Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 
          transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">

          <Link to="projects" smooth={true} offset={50} duration={700}  >Projects</Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 
          transition-transform duration-300 ease-in-out"></span>
        </li>
        <li className="relative group">

          <Link to="contact"  smooth={true} offset={50} duration={700}>Contact</Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 
          transition-transform duration-300 ease-in-out"></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden cursor-pointer">
      {nav?<AiOutlineClose className="h-8 w-8"/> : <AiOutlineMenu className="h-8 w-8"/>}
      </div>

      <div className={nav?'text-center fixed h-full p-5  left-0 top-0 bg-[#232323]':'fixed left-[-100%]'}>
        <ul className="font-semibold text-2xl space-y-8 mt-27 cursor-pointer ">
          <li>
            <Link to="about" onClick={closeNav}>About</Link>
          </li>
          <li>
            <Link to="projects" onClick={closeNav}>Projects</Link>
          </li>
          <li>
            <Link to="contact" onClick={closeNav}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
