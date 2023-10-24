import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import "./Project.css"
function Projects() {
    return (
        <div id='projects'>
            <div className="project-card">
                <div>
                    <img src={greenParadise} alt="" />
                </div>
                <div className='projectDetails'>
                    <h2 className="project-title">Green Paradise</h2>
                    <div className="project-tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <p className="project-description">Green Paradise is a e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies</p>
                    <div>
                        <a href="" class="project-github-link">View Code</a>
                        <a href="" class="project-deployed-link">View Live App</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects