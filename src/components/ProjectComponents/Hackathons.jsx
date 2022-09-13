import React from "react";
import horoscope from "../../assets/projectImages/horoscope.png";
import characters from "../../assets/projectImages/meet-the-characters.png";
import bmo from "../../assets/projectImages/bmohackathon.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Hackathons() {
  return (
    <div>
      {" "}
      {/* Container */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 grid-height">
        {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${horoscope})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Daily Horoscope
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://mini-hackathon-horoscope.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/shan1y/horoscope-mini-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS | API</p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${characters})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center ">
                Meet the Characters
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://meet-the-characters-hackathon.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/shan1y/meet-the-characters-hackathon-netlify"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </a>
              </div>
              <p className="text-center mt-4">
                HTML | CSS | JS | React | Express
              </p>
            </div>
          </div>
        </div>
        {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${bmo})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                BMO Industry Hackathon (mobile)
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://bmo-hackathon.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/shan1y/industry-hackathon-deployed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hackathons;
