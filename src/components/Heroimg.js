import React from "react";
import "./HeroimgStyle.css";
import "../index.css"

import { Link } from "react-router-dom";
import IntroImg from "../assets/img2.jpg";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Priyanshu kumar.</p>
        <p>I'm a developer.</p>
        <h1>MERN Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
