import React from 'react'
import greenParadise from "./projectImages/GreenParadise.png"
import woodFans from "./projectImages/WoodFans.png"
import bewakoof from "./projectImages/Bewakoof.png"
import "./Project.css"


function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <div className="project-card">
                <div className='projectImg'>
                    <img src={woodFans} alt="" />
                </div>
                <div className='projectDetails'>
                    <h2 className="project-title">Wood Fans</h2>
                    <div className="project-tech-stack">
                        <span>React</span>
                        <span>Redux</span>
                        <span>CSS</span>
                        <span>Firebase</span>
                        <span>RazorPay</span>
                    </div>
                    <p className="project-description">
                        Welcome to Wood Fans, your premier destination for exquisite and sustainable furniture solutions that transform your living spaces into havens of comfort and style.</p>
                    <div className='projectButtons'>
                        <a href="https://github.com/1ashutoshverma/wood-fans" target="_blank" className="project-github-link">View Code</a>
                        <a href="https://wood-fans-team.vercel.app/" target="_blank" className="project-deployed-link">View Live App</a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className='projectDetails'>
                    <h2 className="project-title">Green Paradise</h2>
                    <div className="project-tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Firebase</span>
                    </div>
                    <p className="project-description">
                        Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.</p>
                    <div className='projectButtons'>
                        <a href="https://github.com/1ashutoshverma/Green-Paradise" target="_blank" className="project-github-link">View Code</a>
                        <a href="https://green-paradise-team.netlify.app/" target="_blank" className="project-deployed-link">View Live App</a>
                    </div>
                </div>
                <div>
                    <img src={greenParadise} alt="" />
                </div>
            </div>
            <div className="project-card">
                <div>
                    <img src={bewakoof} alt="" />
                </div>
                <div className='projectDetails'>
                    <h2 className="project-title">Bevakoof</h2>
                    <div className="project-tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <p className="project-description">Bewakoof.com is an Indian e-commerce platform known for its trendy and quirky fashion, offering a wide range of casual clothing, accessories, and merchandise. it caters to individuals looking for unique and fun apparel choices.</p>
                    <div className='projectButtons'>
                        <a href="https://github.com/1ashutoshverma/bewakoof-clone" target="_blank" className="project-github-link">View Code</a>
                        <a href="https://bewakoof-team.netlify.app/" target="_blank" className="project-deployed-link">View Live App</a>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <div className='projectDetails'>
                    <h2 className="project-title">Just A Dummy Project</h2>
                    <div className="project-tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                    <p className="project-description"> Green Paradise is an e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favourite plants online.</p>
                    <div className='projectButtons'>
                        <a href="https://github.com/1ashutoshverma/Green-Paradise" target="_blank" className="project-github-link">View Code</a>
                        <a href="https://green-paradise-team.netlify.app/" target="_blank" className="project-deployed-link">View Live App</a>
                    </div>
                </div>
                <div>
                    <img src={greenParadise} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects