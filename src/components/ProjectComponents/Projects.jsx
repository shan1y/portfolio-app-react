import React from "react";
import coffee from "../../assets/projectImages/coffee.png";
import bandsite from "../../assets/projectImages/bandsite.png";
import travelsite from "../../assets/projectImages/travelsite.png";
import brainflix from "../../assets/projectImages/brainflix.png";
import instock from "../../assets/projectImages/instock.png";
import skyball from "../../assets/projectImages/skyball.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Projects() {
  return (
    <>
      {/* Container */}
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-516">
        {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${coffee})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Coffee Shop (Static)
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://coffee-shop-bstn.netlify.app/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shan1y/coffee-shop-project"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS</p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${travelsite})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center ">
                Travel Site (Static)
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://travel-site-bstn.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/shan1y/travel-site" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS </p>
            </div>
          </div>
        </div>
        {/* Grid Item */}
        <div
          style={{ backgroundImage: `url(${bandsite})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Bandsite
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://bandsite-project.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shan1y/shannon-yazdani-bandsite"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS | JS DOM |</p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${brainflix})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex flex-col">
                BrainFlix
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://brainflix-bstn.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shan1y/shannon-yazdani-brainflix-2"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
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
          style={{ backgroundImage: `url(${instock})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex flex-col">
                InStock Group Project
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://instock-project.herokuapp.com/inventory"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shan1y/instock-deployed"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <p className="text-center mt-4">
                HTML | CSS | JS | React | Express
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${skyball})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex flex-col">
                SkyBall Captsone
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://skyball.netlify.app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/shan1y/skyball-capstone2"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <p className="text-center mt-4">
                HTML | CSS | JS | React | Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
