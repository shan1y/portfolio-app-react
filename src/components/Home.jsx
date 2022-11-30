import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen md:h-screen lg:h-screen bg-[#0a192f]"
    >
      {/* Container */}
      <div
        className="max-w-[1000px] relative md:top-0 md:static mx-auto px-8 flex flex-col justify-center h-full"
        // data-aos="fade-zoom-in"
        // data-aos-easing="ease-in-back"
        // data-aos-delay="300"
        // data-aos-offset="0"
      >
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Shannon Yazdani
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a {" "}
      <TypeAnimation
      sequence={[
        'Full Stack Developer', // Types 'One'
      2000, // Waits 1s
        'Career-Changer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Gen. Art Enthusiast',
        2000,
         // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      speed={1}
      repeat={Infinity}
      style={{"display":"inline"}}
    />
        </h2>
       
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I specialize in building exceptional digital experiences and I'm
          passionate about leveraging code to make peoples' lives easier.
          Currently, I’m focused on building responsive full-stack web
          applications.
        </p>
        <div>
          <Link to="featured" offset={-80} smooth={true} duration={1000}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
