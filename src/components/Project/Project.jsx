import HoverVideoPlayer from 'react-hover-video-player';
import './project.scss'
import {HoverIcon,GithubIconFill,LivedemoIcon} from '../Icon/indexIcon'

export default function Project() {
    return (
        <div className='section'>
            <div className="container-project">
         <div className="content-project">
              <h2 className="heading-main">
                <span className="heading-top">project</span>
                <span className="heading-bottom">Here you will find some of the personal and clients projects that I created with each project containing its own case study</span>
              </h2>
              <div className="project-main">

              <div className="left">
              <h3>Project</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet molestias similique cupiditate, explicabo voluptatibus porro tempore perspiciatis alias laborum eaque earum commodi doloribus quis incidunt? Inventore eos nulla tenetur.</p>
              <div className='tech-use-skill'>
              <ul>
                <li>HTML</li>
                <li>Css</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SASS</li>
                <li>GIT</li>
                <li>Github</li>
              </ul>
                </div>
              
                <div className="wrapper">
                <a>Code<GithubIconFill className='icon'/></a>
                <a>Live Demo <LivedemoIcon className='icon'/></a>
                </div> 
              </div>

                <div className='right'>
                  <div className="laptop">
                    <div className="slide-main">
                      <div className="paused"><HoverIcon className='icon'/></div>
                    <div className="slide1"></div>
                    <div className="slide2"></div>
                    <div className="slide3"></div>
                    </div>
                  
                  </div>
                  <div className="phone">
                  <div className="slide-main">
                      {/* <div className="paused"><HoverIcon className='icon'/></div> */}
                    <div className="slide1"></div>
                    <div className="slide2"></div>
                    <div className="slide3"></div>
                    </div>
                  </div>
                </div>
               
               
               {/* <HoverVideoPlayer  
               videoStyle={{
                 width: '400px',
                 height: '263px',
                 objectFit:'fill',
               }}
               pausedOverlay={
                 <div className='paused'><HoverIcon className='icon'/></div>
               }
               restartOnPaused
                videoSrc={require('../../assets/video.mp4')} 
             /> */}
               
               
             </div>  
          
              </div>
             
             
                </div>  
                </div>
             
    )
  }

