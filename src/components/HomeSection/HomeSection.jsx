import React from 'react'
import "./HomeSection.css"
import Typewriter from 'typewriter-effect';
import resume from "../Navbar/MyResume.pdf"
function HomeSection() {
    return (
        <div id='home'>
            <div id='left_home'>
                <div>
                    <h1>Hi, I am</h1>
                    <h1 id="user-detail-name">Ashutosh Verma</h1>
                    {/* <h3>I am a Full Stack Web Developer</h3> */}
                    <h3>
                        I am a
                        <span>
                            <Typewriter
                                options={{
                                    strings: "Full Stack Web Developer",
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h3>
                    <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                    <div className='home_button'>
                        <button className="nav-link resume" id="resume-button-2">
                            <a download={resume} href="https://drive.google.com/file/d/15AOvJU2Tmv30EjbsQn1AcCG01TLKP8eI/view?usp=drive_link" target="_blank">
                                Resume
                            </a>
                        </button>
                        <button className="nav-link github">
                            <a href="https://github.com/1ashutoshverma" target="_blank" >
                                GitHub
                            </a>
                        </button>
                        {/* <button>Check Resume</button>
                        <button>Visit GitHub</button> */}
                    </div>
                </div>
            </div>
            <div id='right_home' >
                <img src="/Images/hero.jpg" alt="" className="home-img" />
            </div>
        </div>
    )
}

export default HomeSection