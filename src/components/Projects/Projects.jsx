import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import "./Project.css"
function Projects() {
    return (
        <div id='projects'>
            <div className="project1">
                <div>
                    <img src={greenParadise} alt="" />
                </div>
                <div className='projectDetails'>
                    <h2>Green Paradise</h2>
                    <div>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <p>Green Paradise is a e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies</p>
                    <div>
                        <a href="">View Code</a>
                        <a href="">View Live App</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects