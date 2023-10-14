import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
    const [burger, setBurger] = useState(false);
    
    return (
        <>
            <div id='nav-menu'>
                {/* For large Screens */}
                <div id="largeScreenNavbar">
                    <div><h2>Portfolio</h2></div>
                    <div>
                        <a href='#home' className="nav-link home">Home</a>
                        <a href='#about' className="nav-link about">About</a>
                        <a href='#skills' className="nav-link skills">Skills</a>
                        <a href='#projects' className="nav-link projects">Projects</a>
                        <a href='#contact' className="nav-link contact">Contact</a>
                    </div>
                    <div>
                        <button className="nav-link resume">Resume</button>
                        <button className="nav-link github">GitHub</button>
                    </div>
                </div>
                {/* For amall Screens */}
                <div id="smallScreenNavbar">
                    <div><h2>Portfolio</h2></div>
                    <div onClick={() => { setBurger(!burger) }}>
                        <img src={burger ? "/Images/cross.svg" : "/Images/burgerMenu.svg"} alt="" />
                    </div>
                </div>
            </div>
            {
                burger ? (<div id='smallScreenDropDown'>
                    <div>
                        <a href='#home' className="nav-link home">Home</a>
                        <a href='#about' className="nav-link about">About</a>
                        <a href='#skills' className="nav-link skills">Skills</a>
                        <a href='#projects' className="nav-link projects">Projects</a>
                        <a href='#contact' className="nav-link contact">Contact</a>
                        <button className="nav-link resume">Resume</button>
                        <button className="nav-link github">GitHub</button>
                    </div>
                </div>) : <></>
            }

        </>
    )
}

export default Navbar
