import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sass from "../assets/Sass.png";
import FireBase from "../assets/firebase.png";
import MySQL from "../assets/mysql.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            An evergrowing list of some of the languages and tools that I work
            with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={CSS}
              alt="HTML icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={Node}
              alt="HTML icon"
            />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={Sass}
              alt="HTML icon"
            />
            <p className="my-4">SASS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={FireBase}
              alt="HTML icon"
            />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={MySQL}
              alt="HTML icon"
            />
            <p className="my-4">MYSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
