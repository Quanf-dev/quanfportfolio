import "./project.scss";
import {
  HoverIcon,
  GithubIconFill,
  LivedemoIcon,
  PortfolioIcon,
} from "../Icon/indexIcon";
import listProject from "./dataProject";
export default function Project() {
  return (
    <div className="section">
      <div className="container-project">
        <div className="content-project">
          <h2 className="heading-main">
            <span className="heading-top">Project</span>
            <span className="heading-bottom">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </span>
          </h2>
            {listProject.map( item => {
                   return (
                   <div className="slide" >
                   <div className="project-main">
               
                    <div className="left">
                      <h3>
                        {item.title}
                        <PortfolioIcon className="icon" />
                      </h3>
                      <p>
                      {item.desc}
                      </p>
                      <div className="tech-use-skill">
                        <ul>
                          {item.skil.map((skill) => (
                            <li>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="wrapper">
                        <a>
                          Code
                          <GithubIconFill className="icon" />
                        </a>
                        <a>
                          Live Demo <LivedemoIcon className="icon" />
                        </a>
                      </div>
                    </div>
                    <div className="right">
                      <div className="laptop">
                        <div className="slide-main">
                          <div className="paused">
                            <HoverIcon className="icon" />
                          </div>
                          <div
                            style={{
                              backgroundImage: `url(${
                                process.env.PUBLIC_URL +
                                "/assets/SlideAssets/slide2.png"
                              })`,
                            }}
                            className="slide1"
                          ></div>
                          <div className="slide2"></div>
                          <div className="slide3"></div>
                        </div>
                      </div>
                      <div className="phone">
                        <div className="slide-main">
                          <div className="paused">
                            <HoverIcon className="icon" />
                          </div>
                          <div className="slide1"></div>
                          <div className="slide2"></div>
                          <div className="slide3"></div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                )
             })} 
        </div>
      </div>
    </div>
  );
}

