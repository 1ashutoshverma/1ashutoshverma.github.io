"use client";
import React from "react";
import "./HomeSection.css";
import Typewriter from "typewriter-effect";
import { downloadResume, githubHandle } from "../../utils/functions";

function HomeSection() {
  return (
    <div id="home">
      <div id="left_home">
        <div>
          <h1>Hi, I am</h1>
          <h1 id="user-detail-name">Ashutosh Verma</h1>
          <h3>
            I am a
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "MERN Stack Developer",
                    "Backend Developer",
                    "Frontend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p>
            {" "}
            With over 1+ year of experience in a dynamic fintech product-based
            company, I’ve worked across the full web development
            lifecycle—building, scaling, and optimizing real-world applications.
            My work spans a wide range of modern technologies and frameworks,
            both on the frontend and backend.{" "}
            <a href="#contact" className="contactMe">
              Contact Me
            </a>
          </p>
          <div className="home_button">
            <button id="resume-button-2" onClick={downloadResume}>
              Resume
            </button>
            <button onClick={githubHandle}>GitHub</button>
          </div>
        </div>
      </div>
      <div id="right_home">
        <img src="/Images/hero.jpg" alt="" className="home-img" />
      </div>
    </div>
  );
}

export default HomeSection;
