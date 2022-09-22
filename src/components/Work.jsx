import React from "react";
import Projects from "./ProjectComponents/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hackathons from "./ProjectComponents/Hackathons";
import API from "./ProjectComponents/API";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

//pb-20 md:pb-10 lg:pb-0
const Work = () => {
  return (
    <Router>
      <div
        name="work"
        className="w-full md:h-screen md:flex text-gray-300 bg-[#0a192f]"
      >
        <div
          className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <div className="pb-6">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Projects
            </p>
            <p className="pt-6">Check out some of my recent work:</p>
          </div>
          <div className="flex gap-x-10 py-2">
            <Link class="hover:text-[#DB2777] underline" to="/">
              Projects
            </Link>
            <Link class="hover:text-[#DB2777] underline " to="/hackathons">
              Hackathons
            </Link>
            <Link class="hover:text-[#DB2777] underline " to="/apis">
              APIs
            </Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Projects />
            </Route>
            <Route exact path="/hackathons">
              <Hackathons />
            </Route>
            <Route exact path="/apis">
              <API />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Work;
