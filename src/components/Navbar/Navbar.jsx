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
                        <p className="nav-link home">Home</p>
                        <p className="nav-link about">About</p>
                        <p className="nav-link skills">Skills</p>
                        <p className="nav-link projects">Projects</p>
                        <p className="nav-link contact">Contact</p>
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
                        <img src="/Images/burgerMenu.svg" alt="" />
                    </div>
                </div>
            </div>

            {
                burger ? (<div id='smallScreenDropDown'>
                    <div>
                        <p className="nav-link home">Home</p>
                        <p className="nav-link about">About</p>
                        <p className="nav-link skills">Skills</p>
                        <p className="nav-link projects">Projects</p>
                        <p className="nav-link contact">Contact</p>
                        <button className="nav-link resume">Resume</button>
                        <button className="nav-link github">GitHub</button>
                    </div>

                </div>) : <></>
            }

        </>
    )
}

export default Navbar
