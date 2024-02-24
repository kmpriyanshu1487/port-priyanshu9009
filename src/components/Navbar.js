import "../components/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={click ? "nav-menus active" : "nav-menus"}>
        <li>
          <Link to="/" className="hover-line">Home</Link>
        </li>
        <li>
          <Link to="/project" className="hover-line">Project</Link>
        </li>

        <li>
          <Link to="/about" className="hover-line">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover-line">Contact me</Link>
        </li>
        <li>
          <Link to="/contact" className="hover-line">Download cv</Link>
        </li>
        <li>
          <Link  id="Nav-btn" to="/contact">Hire me</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
