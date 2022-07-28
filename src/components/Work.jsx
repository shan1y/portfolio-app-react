import React from "react";
import coffee from "../assets/projectImages/coffee.png";
import bandsite from "../assets/projectImages/bandsite.png";
import travelsite from "../assets/projectImages/travelsite.png";
import brainflix from "../assets/projectImages/brainflix.png";
import instock from "../assets/projectImages/instock.png";
import skyball from "../assets/projectImages/skyball.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${coffee})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
          >
            {/* Hover Effects */}
            <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 text-center flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Coffee Shop
              </span>
              <div className="pt-8 text-center">
                <a href="https://coffee-shop-bstn.netlify.app/index.html" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button> */}
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React | Express</p>
            </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${travelsite})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
          >
            {/* Hover Effects */}
            <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wider text-center ">
                Travel Site
              </span>
              <div className="pt-8 text-center">
                <a href="https://travel-site-bstn.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  {/* <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button> */}
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React | Express</p>
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
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Bandsite
              </span>
              <div className="pt-8 text-center">
                <a href="https://bandsite-project.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="https://bandsite-project.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React | Express</p>
            </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${brainflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
          >
            {/* Hover Effects */}
            <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex flex-col">
                BrainFlix
              </span>
              <div className="pt-8 text-center">
                <a href="https://brainflix-bstn.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="/https://brainflix-bstn.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React | Express</p>
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
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex flex-col">
                InStock Group Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://instock-project.herokuapp.com/inventory" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React | Express</p>
            </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${skyball})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image"
          >
            {/* Hover Effects */}
            <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center flex flex-col">
                SkyBall Captsone
              </span>
              <div className="pt-8 text-center">
                <a href="https://skyball.netlify.app" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
              <p className="text-center mt-4">HTML | CSS | JS | React | Express</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
