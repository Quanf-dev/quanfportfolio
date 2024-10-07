import React, { useEffect } from 'react';
import './preloader.scss'

export default function Preloader() {

  return (
    <div>
      <div className="container">
        <div className="content">
            <span>Xin Chào    <img src={process.env.PUBLIC_URL + '/assets/vnicon.png'} /> </span>
            <span>Hello   <img src={process.env.PUBLIC_URL + '/assets/cap.png'} /> </span>
            <span>こんにちは <img src={process.env.PUBLIC_URL + '/assets/samurai.png'} /> </span>
            <span>Hola <img src={process.env.PUBLIC_URL + '/assets/spain.png'} /> </span>
            <span>Привет <img src={process.env.PUBLIC_URL + '/assets/russian.png'} /> </span>
            <span>你好 <img src={process.env.PUBLIC_URL + '/assets/china.png'} /> </span>
        </div>
      </div>
    </div>
  );
}
