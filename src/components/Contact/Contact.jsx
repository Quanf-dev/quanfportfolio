import './contact.scss'
import {LocationIcon,MailIcon,PhoneIcon,GithubIcon,FacebookIcon} from '../Icon/indexIcon'

export default function Contact() {
    return (
      <div className='section'>
        <div className="container-contact">
         <div className="content-contact">
              <h2 className="heading-main">
                <span className="heading-top">contact</span>
                <span className="heading-bottom">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span>
              </h2>
              <div className="contact-form-main">
              <div className="form-right">
              <form>
                  <label>
                    Name
                  <input placeholder='Enter your name' type="text" />
                  </label>
                  <label>
                    Email
                  <input placeholder='Enter your email' type="text" />
                  </label>
                  <label>
                    Message
                  <textarea placeholder='Enter your Message' type="text" />
                  </label>
                  <button type='submit' className='btn'>Submit</button>
                  </form>  
              </div>
              <div className="form-left">
                <div className="box-icon">
                    <span><LocationIcon className='icon'/></span>
                    <div className="box-detail">
                    <h3>Location</h3>
                    <p>QuangTri, VietNam</p>
                    </div>
                </div>
                <div className="box-icon">
                    <span><MailIcon className='icon'/></span>
                    <div className="box-detail">
                    <h3>Mail</h3>
                    <p>quanf.dev@gmail.com</p>
                    </div>
                </div>
                <div className="box-icon">
                    <span><PhoneIcon className='icon'/></span>
                    <div className="box-detail">
                    <h3>Number</h3>
                    <p>+84 34 226 8998 </p>
                    </div>
                </div>
                <div className="box-icon">
                    <span><GithubIcon className='icon'/></span>
                    <div className="box-detail">
                    <h3>Github</h3>
                    <p>github.com/quanf-dev</p>
                    </div>
                </div>
                <div className="box-icon">
                    <span><FacebookIcon className='icon'/></span>
                    <div className="box-detail">
                    <h3>Facebook</h3>
                    <p>facebook.com/quanf.dev</p>
                    </div>
                </div>
                <div className="social-icon-main">
                </div>
              </div>
              </div>
              </div>
      </div>
      </div>
    )
  }

