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
                        <p class="nav-link home">Home</p>
                        <p class="nav-link about">About</p>
                        <p class="nav-link skills">Skills</p>
                        <p class="nav-link projects">Projects</p>
                        <p class="nav-link contact">Contact</p>
                    </div>
                    <div>
                        <button class="nav-link resume">Resume</button>
                        <button class="nav-link github">GitHub</button>
                    </div>
                </div>
                {/* For amall Screens */}
                <div id="smallScreenNavbar">
                    <div><h2>Portfolio</h2></div>
                    <div onClick={() => { setBurger(!burger) }}>
                        <img src="/src/assets/navbarImages/burgerMenu.svg" alt="" />
                    </div>
                </div>
            </div>

            {
                burger ? (<div id='smallScreenDropDown'>
                    <div>
                        <p class="nav-link home">Home</p>
                        <p class="nav-link about">About</p>
                        <p class="nav-link skills">Skills</p>
                        <p class="nav-link projects">Projects</p>
                        <p class="nav-link contact">Contact</p>
                        <button class="nav-link resume">Resume</button>
                        <button class="nav-link github">GitHub</button>
                    </div>

                </div>) : <></>
            }

        </>
    )
}

export default Navbar
