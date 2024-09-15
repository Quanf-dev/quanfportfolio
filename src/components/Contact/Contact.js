import React, { Component } from 'react'
import './contact.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default class Contact extends Component {
  render() {
    return (
      <div className='section contact'>
         <div className="content">
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
                  </form>  
              </div>
              <div className="form-left">
                <h3>Contact information</h3>  
                <p>My address: Quang Tri, Viet Nam <LocationOnIcon className='icon'/></p>
                <p>My Email: quanf.dev@gmail.com <MailOutlineIcon className='icon'/> </p>
                <p>My Number: +84 34226 8998 <PhoneIcon className='icon'/> </p>
                <p>Hopefully we will have another chance to work together in the future! Thank you <MoodIcon/> </p>
              </div>
              </div>
              </div>
      </div>
    )
  }
}
