import React from "react";
import headshot from "../assets/headshot.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();


const About = () => {
  return (
    <div id="about"  className="w-full  md:h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full" data-aos="fade-up">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p  className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div class=" max-w-5xl md:flex gap-8">
          <div class="flex md:gap-4 lg:gap-8 flex-col items-center basis-1/2 justify-around">
            <div class="w-1/2 h-1/2 ">
              <img
                src={headshot}
                class="rounded-full mb-8"
                alt="photo of shannon"
              ></img>
            </div>
            <div className="max-w-[1000px] w-full  gap-8 px-4">
              <div className="sm:text-center text-4xl font-bold">
                <p>Hi. I'm Shannon, nice to meet you </p>
              </div>
            </div>
          </div>
          <div class="basis-1/2 flex flex-col gap-4 justify-center ">
            <p class="p-4">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
            <p class="p-4">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
