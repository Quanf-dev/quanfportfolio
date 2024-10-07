
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './fullpage.scss';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Topbar from "./components/topbar/Topbar";

const anchors = ["Home", "About", "Project","Contact"];

const FullPage = () => {
  return (
    <div className="App">
      <Topbar id="header" />
      <ReactFullpage id='full'
       
        navigation
        navigationTooltips={anchors}
        slidesNavigation={true}
        navigat
        scrollingSpeed={1000}
                render={() => (
          <ReactFullpage.Wrapper>
             <Home />
             <About />
             <Project/>
            <Contact/>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

export default FullPage;

