import "./FooterStyle.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Gorakhpur</p>
              <p>Uttar Pradesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9140884957
            </h4>
          </div>
          <div className="email">
            <h4>
              <a href="mailto:kmpriyanshu741@gmail.com">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              kmpriyanshu741@gmail.com
              </a>
              
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>Follow me on my social medias to get regular updated.</p>
          <div className="social">
            <a href="https://www.instagram.com/priyanshu_kumar_33/">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
            </a>
            <a href="https://twitter.com/Priyans06664944">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
            </a>
            <a href="https://github.com/kmpriyanshu1487">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
            </a>
            <a href="https://www.instagram.com/priyanshu_kumar_33/">
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-kumar-139097258/">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
