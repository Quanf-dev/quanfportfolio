import HoverVideoPlayer from 'react-hover-video-player';
import './project.scss'
import {HoverIcon} from '../Icon/indexIcon'

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
                <div className='left'>
                  
                </div>
              <div className="mid">
                <div className='video-main'>
                <HoverVideoPlayer  
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
              />
                </div>
                
              </div>  
              <div className="right">
              </div>
                </div>  
                </div>
                </div>
        </div>
    )
  }

