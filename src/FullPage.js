
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './fullpage.scss';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const anchors = ["Home", "About", "Project","Contact"];

const FullPage = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    scrollingSpeed={1000}
    scrollOverflow={true}
    render={() => {
      return (
        <div className="sections">
          <Home />
          <About />
          <Project/>
          <Contact/>
              </div>
      );
    }}
  />
);
export default FullPage;

