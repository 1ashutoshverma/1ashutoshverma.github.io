import React from 'react'
import style from "./HomeSection.css"

function HomeSection() {
    console.log(style)
    return (
        <div id='home'>
            <div id='left_home'>
                <h1>Hi, I am</h1>
                <h1>Ashutosh Verma</h1>
                <h3>I am Full Stack Web Developer</h3>
                <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                {/* <div>
                    <button>Check Resume</button>
                    <button>Visit GitHub</button>
                </div> */}
            </div>
            <div id='right_home'>
                <img src="/Images/hero.jpg" alt="" />
            </div>
        </div>
    )
}

export default HomeSection