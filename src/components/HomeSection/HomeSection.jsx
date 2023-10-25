import React from 'react'
import "./HomeSection.css"
import Typewriter from 'typewriter-effect';
import MyResume from "../Navbar/MyResume.pdf"

function HomeSection() {
    const downloadHandle = () => {
        window.open("https://drive.google.com/file/d/15AOvJU2Tmv30EjbsQn1AcCG01TLKP8eI/view", "_blank")
    }
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

                        <button className="nav-link resume" id="resume-button-2"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.download = "Ashutosh_resume.pdf";
                                link.href = MyResume;
                                link.click();
                            }}>
                            Resume
                        </button>

                        <a href="https://github.com/1ashutoshverma" target="_blank" >
                            <button className="nav-link github" >
                                GitHub
                            </button>
                        </a>
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