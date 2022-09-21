import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vue1 from "../assets/projectImages/deja-vue-1.png";
import instock from "../assets/projectImages/instock2.png";
import bestflix from "../assets/projectImages/bestflix.png";

AOS.init();

const Featured = () => {
  return (
    <div
      id="featured"
      className="w-full pb-20 md:pb-10 lg:pb-0 md:flex bg-[#0a192f] text-gray-300"
    >
      <div
        className="flex flex-col justify-center items-center w-full "
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <div className="max-w-[1000px]  w-full  gap-8 ">
          <div className=" pb-8 p-4">
            <p className="text-4xl font-bold inline-block  border-b-4 border-pink-600">
              WIP
            </p>
            <p className="py-4">Check out projcets I'm currently working on:</p>
            <div className="flex justiyfy-center py-4   bg-[#1b2d47] px-4 rounded-lg items-center">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="basis-1/2 ">
                  <img src={vue1} className="max-w-3  rounded-md"></img>
                </div>
                <div className="flex p-4 flex-col basis-1/2 justify-center items-center">
                  <h3 className="text-xl font-bold p-2">Deja Vue</h3>
                  <p className="p-2">
                    Do you remember that game called Memory that you used to
                    play with the actual paper cards? To win, you needed to
                    memorize the position of the paired card.{" "}
                  </p>
                  <p className="p-2">
                    This game is powered by{" "}
                    <span className="text-[#DB2777]">Vue.Js</span> and built
                    with <span className="text-[#DB2777]">Docker</span> to
                    streamline deployment.
                  </p>
                  <p className="p-2">
                    Next steps include adding a feature to track the number of
                    moves of the user.
                  </p>
                  <div className="w-full flex justify-around">
                    <a
                      href="https://deja-vue-app.netlify.app/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-center bg-opacity-40 rounded-lg px-4 py-2 m-2 bg-black  font-bold text-lg"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/shan1y/memory-game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center bg-opacity-40 rounded-lg px-4 py-2 m-2 bg-black font-bold text-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justiyfy-center py-4 my-4 bg-[#051021] px-4 rounded-lg items-center">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="basis-1/2 md:order-last">
                  <img src={bestflix} className="max-w-3  rounded-md"></img>
                </div>
                <div className="flex p-4 flex-col basis-1/2 justify-center items-center">
                  <h3 className="text-xl font-bold p-2">BestFlix</h3>
                  <p className="p-2">
                    This is a movie streaming website dupe with non-functional
                    videos. Users can search for videos and tv series, and add
                    to their bookmarked list.
                  </p>
                  <p className="p-2">
                    The tech stack for this project includes
                    <span className="text-[#DB2777]"> MySQL</span> ,
                    <span className="text-[#DB2777]"> TypeScript</span> ,
                    <span className="text-[#DB2777]"> React</span>and
                    <span className="text-[#DB2777]"> JWT </span> for
                    authentication and authorization.
                  </p>
                  <p className="p-2">
                    Next steps include creating a new MySQL table to track
                    bookmarked videos/series for unique users.
                  </p>
                  <div className="w-full flex justify-around">
                    <a
                      href="https://bestflix-sy.netlify.app/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-center bg-opacity-40 rounded-lg px-4 py-2 m-2 bg-black  font-bold text-lg"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/shan1y/entertainment-web-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center bg-opacity-40 rounded-lg px-4 py-2 m-2 bg-black font-bold text-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  bg-[#1b2d47] px-4 rounded-lg justiyfy-center py-4 items-center">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="basis-1/2 ">
                  <img src={instock} className="max-w-3  rounded-md"></img>
                </div>
                <div className="flex p-4 flex-col basis-1/2 justify-center items-center">
                  <h3 className="text-xl font-bold p-2">InStock</h3>
                  <p className="p-2">
                    This is a full stack application created in 5 days with 2
                    other team members. The goal was to deliver an Inventory
                    Management System for a Fortune 500 client.
                  </p>
                  <p className="p-2">
                    The tech stack for this project includes
                    <span className="text-[#DB2777]"> Sass</span> ,
                    <span className="text-[#DB2777]"> React</span> ,
                    <span className="text-[#DB2777]"> Node.js</span> and with
                    <span className="text-[#DB2777]"> Jira </span> for
                    collaboration.
                  </p>
                  <p className="p-2">
                    Next steps include adding page transitions for improved UX.
                  </p>
                  <div className="w-full flex justify-around">
                    <a
                      href="https://instock-project.herokuapp.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-center bg-opacity-40 rounded-lg px-4 py-2 m-2 bg-black  font-bold text-lg"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/shan1y/instock-deployed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center bg-opacity-40 rounded-lg px-4 py-2 m-2 bg-black font-bold text-lg"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
