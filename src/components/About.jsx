import React from "react";
import headshot from "../assets/headshot.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
  return (
    <div
      id="about"
      className="w-full pb-20 md:pb-10 lg:pb-0 md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div
        className="flex flex-col justify-center items-center w-full "
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <div className="max-w-[1000px]  w-full grid grid-cols-2 gap-8 ">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
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
                <p>Hi! I'm Shannon. It's so nice to meet you. </p>
              </div>
            </div>
          </div>
          <div class="basis-1/2 flex flex-col gap-4 justify-center ">
            <p class="p-4">
              I'm a Full Stack Developer who's currently based in the city
              that's always buzzing, Toronto. Prior to graduating from{" "}
              <a
                class="text-[#8892b0]"
                href="https://brainstation.io/?utm_keyword=brainstation&utm_network=g&utm_matchtype=e&utm_creative=482909840077&utm_target=&utm_placement=&utm_device=c&utm_campaign=11729367083&utm_adgroup=116579479809&utm_source=AdWords&utm_target_id=kwd-296950415241&gclid=Cj0KCQjwuuKXBhCRARIsAC-gM0iWvnb6YVZdXY-gdaBkpqPcGkWTrNcnOrUugot_Dz2FjYcuTMrJJQ4aAo2FEALw_wcB"
                target="_blank"
              >
                Brainstation
              </a>
              's Full-Stack development bootcamp and being selected as a TA for their next
              cohort, I was a chemical engineer who held a technical sales role
              at
              <a
                class="text-[#8892b0]"
                href="https://www.rockwellautomation.com/en-us.html"
                target="_blank"
              >
                {" "}
                Rockwell Automation{" "}
              </a>
              for 3 years.
            </p>
            <p class="p-4">
              After engineering internships and sales roles, I've realized that
              coding and problem solving is what I enjoyed most about my degree!
              I'm also passionate about mentorship and doing work that brings
              positive impact to individuals.
            </p>
            {/* <p class="p-4">
              When I'm not coding, you can find me playing court or beach
              volleyball, exploring the depths of web3, curating new Spotify
              playlists, and discovering new hole-in-the-wall restaurants!
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
