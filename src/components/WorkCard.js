import React from "react";

import { NavLink } from "react-router-dom";
import "./WorkCard.css"; // Import CSS file

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
         
          <NavLink to={props.view} className="btn" target="_blank" rel="noopener noreferrer">
            View
          </NavLink>
          <NavLink to="google.com" className="btn" target="_blank" rel="noopener noreferrer">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
