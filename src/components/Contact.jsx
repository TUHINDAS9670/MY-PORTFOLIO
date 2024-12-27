import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1300px] mx-auto glass md:grid-cols-2 place-items-center flex justify-center items-center shadow-lg " id="contact">
      <div className=" ">
        <div className="pr-6 text-8xl flex mx-auto gap-32 mb-9">
          <a href="">
            {" "}
            <FaLinkedin className=" text-blue-500 rounded-lg" />
          </a>
          <a href="https://github.com/TUHINDAS9670">
            <FaGithub className=" text-white rounded-lg" />
          </a>
        </div>
        <div className="m-5 space-y-1 ">
          <h3 className="text-lg font-bold text-gray-200">Contact</h3>
          <p className="text-gray-400">
            Mobile: <span className="text-yellow-200">9330746438</span>
          </p>
          <p className="text-gray-400">
            Email:{" "}
            <a href="" className="text-yellow-200">
              tuhindas28.dev@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div>
        <form
          action=""
          method="pos"
          className="max-w-2xl p-5 md:p-12 "
          id="form"
        >
          <input
            type="text"
            id="name"
            placeholder="Your Name....."
            name="name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
          />

          <input
            type="email"
            id="email"
            placeholder="Your Email....."
            name="name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
          />

          <textarea
            type="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Your Message....."
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-md  hover:text-gray-600 font-semibold text-xl  bg-blue-600 text-white hover:bg-blue-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
