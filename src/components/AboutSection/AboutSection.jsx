"use client";
import React from "react";
import "./AboutSection.css";
import { Admin } from "../../utils/constants";
import { parseBoldText } from "../../utils/functions";

function AboutSection() {
  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <p id="user-detail-intro">
        {parseBoldText(Admin.aboutSection.about)}
        <a href="#contact" className="contactMe">
          {Admin.aboutSection.contact}
        </a>
      </p>
    </div>
  );
}

export default AboutSection;
