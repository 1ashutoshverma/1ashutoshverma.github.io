import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import woodFans from "./projectImages/WoodFans.png"
import bewakoof from "./projectImages/Bewakoof.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [
    {
        img: woodFans,
        projectTitle: "Wood Fans",
        techStack: ["React", "Redux", "CSS", "Firebase", "RazorPay"],
        description: " Welcome to Wood Fans, your premier destination for exquisite and sustainable furniture solutions that transform your living spaces into havens of comfort and style.",
        githubLink: "https://github.com/1ashutoshverma/wood-fans",
        appLink: "https://wood-fans-team.vercel.app/"
    },
    {
        img: greenParadise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
        githubLink: "https://github.com/1ashutoshverma/Green-Paradise",
        appLink: "https://green-paradise-team.netlify.app/"
    },
    {
        img: bewakoof,
        projectTitle: "Bewakoof",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: "Bewakoof.com is an Indian e-commerce platform known for its trendy and quirky fashion, offering a wide range of casual clothing, accessories, and merchandise. it caters to individuals looking for unique and fun apparel choices.",
        githubLink: "https://github.com/1ashutoshverma/bewakoof-clone",
        appLink: "https://bewakoof-team.netlify.app/"
    }, {
        img: greenParadise,
        projectTitle: "Green Paradise",
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "RazorPay"],
        description: "Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.",
        githubLink: "https://github.com/1ashutoshverma/Green-Paradise",
        appLink: "https://green-paradise-team.netlify.app/"
    }
]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1">
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.githubLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2">
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.githubLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects