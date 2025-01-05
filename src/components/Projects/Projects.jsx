"use client";
import React from "react";
import "./Project.css";

const data = [
  {
    img: "/projectImages/WoodFans.png",
    projectTitle: "Wood Fans",
    techStack: [
      "React",
      "Redux",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "RazorPay",
    ],
    description:
      " Welcome to Wood Fans, your premier destination for exquisite and sustainable furniture solutions that transform your living spaces into havens of comfort and style.",
    githubLink: "https://github.com/1ashutoshverma/wood-fans-mern",
    appLink: "https://wood-fans.vercel.app/",
    backendLink: "https://github.com/1ashutoshverma/wood-fans-backend",
  },
  {
    img: "/projectImages/chatapp.png",
    projectTitle: "Chat App",
    techStack: [
      "Next.js",
      "Redux",
      "Socket.io",
      "ChakraUI",
      "AWS",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    description:
      "Revolutionize social connections with our dynamic chat app! Engage in vibrant public groups, effortlessly find and connect with users, and elevate your networking experience through our user-friendly interface.",
    githubLink: "https://github.com/1ashutoshverma/chat-app-frontend",
    appLink: "https://own-chat-app.vercel.app/",
    backendLink: "https://github.com/1ashutoshverma/chat-app-backend",
  },
  {
    img: "/projectImages/GreenParadise.png",
    projectTitle: "Green Paradise",
    techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
    description:
      "Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
    githubLink: "https://github.com/1ashutoshverma/Green-Paradise",
    appLink: "https://green-paradise-team.netlify.app/",
  },
  {
    img: "/projectImages/Bewakoof.png",
    projectTitle: "Bewakoof",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "Bewakoof.com is an Indian e-commerce platform known for its trendy and quirky fashion, offering a wide range of casual clothing, accessories, and merchandise. it caters to individuals looking for unique and fun apparel choices.",
    githubLink: "https://github.com/1ashutoshverma/bewakoof-clone",
    appLink: "https://bewakoof-team.netlify.app/",
  },
  // {
  //     img: myPortfolio,
  //     projectTitle: "My Portfolio",
  //     techStack: ["React", "CSS", "JavaScript"],
  //     description: "I am proud to present my personal portfolio website, built using React, a powerful JavaScript library for building user interfaces. This project reflects my skills, experiences, and the projects I've undertaken.",
  //     githubLink: "https://github.com/1ashutoshverma/1ashutoshverma.github.io",
  //     appLink: "https://1ashutoshverma.github.io/"
  // }
];

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>

      {data.map((e, index) => {
        return index % 2 == 0 ? (
          <div className="project-card proCard1" key={index}>
            <div className="projectImg">
              <img src={e.img} alt="" />
            </div>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind}>{ele}</span>;
                })}
              </div>
              <p className="project-description">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link"
                >
                  View Live App
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-card proCard2" key={index}>
            <div className="projectDetails">
              <h2 className="project-title">
                {index + 1 + ". " + e.projectTitle}
              </h2>
              <div className="project-tech-stack">
                {e.techStack.map((ele, ind) => {
                  return <span key={ind}>{ele}</span>;
                })}
              </div>
              <p className="project-description">{e.description}</p>
              <div
                className={
                  e.backendLink ? "projectButtons2" : "projectButtons1"
                }
              >
                <a
                  href={e.githubLink}
                  target="_blank"
                  className="project-github-link"
                >
                  {e.backendLink ? "Frontend Code" : "View Code"}
                </a>
                {e.backendLink ? (
                  <a
                    href={e.backendLink}
                    target="_blank"
                    className="project-github-link"
                  >
                    Backend Code
                  </a>
                ) : (
                  <></>
                )}
                <a
                  href={e.appLink}
                  target="_blank"
                  className="project-deployed-link"
                >
                  View Live App
                </a>
              </div>
            </div>
            <div className="projectImg">
              <img src={e.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
