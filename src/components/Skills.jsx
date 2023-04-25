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
import Mongo from "../assets/mongo.png";
import Vue from "../assets/vueicon.png";
import typescript from "../assets/typescript-logo.svg";
import jest from "../assets/jest.png";
import knex from "../assets/knex.png";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full pb-20 md:flex bg-[#0a192f] text-gray-300"
    >
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

        <div className="w-full pb-20 md:pb-10 lg:pb-0 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10  lg:w-20 mx-auto"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">HTML</p>
          </div>
          <div className="shadow-md pt-4  shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={CSS}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">CSS</p>
          </div>
          <div className="shadow-md  pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10   lg:w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">REACT</p>
          </div>
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10  lg:w-20 mx-auto"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">GITHUB</p>
          </div>
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10  lg:w-20 mx-auto"
              src={Node}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">NODE JS</p>
          </div>
          <div className="shadow-md pt-4  shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={Sass}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">SASS</p>
          </div>
          <div className="shadow-md pt-4  shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6  md:w-10 lg:w-20 mx-auto"
              src={FireBase}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">FIREBASE</p>
          </div>
          <div className="shadow-md pt-4  shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-6 md:w-10 lg:w-20 mx-auto"
              src={Tailwind}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">TAILWIND</p>
          </div>
          <div className="shadow-md pt-4  shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8  h-6 md:w-14 md:h-10 lg:w-24 lg:h-20 mx-auto"
              src={MySQL}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">MYSQL</p>
          </div>
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 h-6  md:w-14 md:h-10 lg:w-24 lg:h-20 mx-auto"
              src={typescript}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md pt-4  shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 h-6 md:w-14 md:h-10 lg:w-24 lg:h-20 mx-auto"
              src={Vue}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">VUE.JS</p>
          </div>
          <div className="shadow-md pt-4   shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8  h-6 md:w-14 md:h-10 lg:w-24 lg:h-20 mx-auto"
              src={Mongo}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">MONGODB</p>
          </div>
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 h-6 md:w-14 md:h-10 lg:w-24 lg:h-20 mx-auto"
              src={knex}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">KNEX</p>
          </div>
          <div className="shadow-md pt-4 shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-8 h-6  md:w-14 md:h-10 lg:w-24 lg:h-20 mx-auto"
              src={jest}
              alt="HTML icon"
            />
            <p className="my-2 md:my-4">JEST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
