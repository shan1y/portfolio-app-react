import React from "react";
import Projects from "./Projects/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hackathons from "./ProjectComponents/Hackathons";
import API from "./Projects/API";

const Work = () => {
  return (
    <Router>
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <Link to="/">Projects</Link>
        <Link to="/hackathons">Hackathons</Link>
        <Link to="/apis">APIs</Link>
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
