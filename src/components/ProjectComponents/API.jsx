import React from "react";
import api from "../../assets/projectImages/brainflixapi.png";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

function API() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 grid-height" data-aos-duration="1000" data-aos="fade-left">
        <div
          style={{ backgroundImage: `url(${api})` }}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-image--api"
        >
          {/* Hover Effects */}
          <div class="content-div h-full w-full flex flex-col justify-center">
            <div className="opacity-0 group-hover:opacity-100 h-full flex flex-col py-8 justify-between">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Coffee Shop
              </span>
              <div className="pt-4 text-center">
                <a
                  href="https://brainflix-api.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <p className="text-center mt-4">HTML | CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default API;
