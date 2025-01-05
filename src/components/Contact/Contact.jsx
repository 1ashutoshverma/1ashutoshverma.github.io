"use client";
import React from "react";
import "./Contact.css";
import { customAnchor } from "../../utils/functions";

const Phone = "/contactImages/Phone.png";
const Email = "/contactImages/Email.png";
const LinkedIn = "/contactImages/LinkedIn.png";
const Github = "/contactImages/Github.png";

function Contact() {
  const sendto = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div>
        <div
          id="contact-github"
          className="contactCard"
          onClick={() => {
            sendto("https://github.com/1ashutoshverma");
          }}
        >
          <img src={Github} alt="" />
          <h5>Github</h5>
          <p>1ashutoshverma</p>
        </div>
        <div
          id="contact-linkedin"
          className="contactCard"
          onClick={() => {
            sendto("https://www.linkedin.com/in/1ashutoshverma/");
          }}
        >
          <img src={LinkedIn} alt="LinkedIn" />
          <h5>Linkedin</h5>
          <p>1ashutoshverma</p>
        </div>
        <div
          id="contact-email"
          className="contactCard"
          onClick={() => {
            customAnchor("mailto:1ashutoshverma@gmail.com");
          }}
        >
          <img src={Email} alt="" />
          <h5>Email</h5>
          <p>1ashutoshverma@gmail.com</p>
        </div>
        <div
          id="contact-phone"
          className="contactCard"
          onClick={() => {
            customAnchor("tel:+918756978783");
          }}
        >
          <img src={Phone} alt="" />
          <h5>Phone</h5>
          <p>+91 8756978783</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
