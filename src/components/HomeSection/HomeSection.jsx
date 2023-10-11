import React from 'react'
import style from "./HomeSection.css"
import Typewriter from 'typewriter-effect';

function HomeSection() {
    console.log(style)
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
                    <p>React | JavaScript | HTML | CSS | JAVA | Git | DSA</p>
                    <div className='home_button'>
                        <button>Check Resume</button>
                        <button>Visit GitHub</button>
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