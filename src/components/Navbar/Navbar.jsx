import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import resume from "./MyResume.pdf"
function Navbar() {
    const [burger, setBurger] = useState(false);

    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Ashutosh-Verma-Resume.pdf";
        link.href = resume;
        link.click();
        window.open(
            "https://drive.google.com/file/d/1WV8vFaEnNWxYKO0gLjL3O_b8sOSKp9rZ/view?usp=sharing",
            "_blank"
        );
    };

    // const downloadHandle = () => {
    //     window.open("https://drive.google.com/file/d/15AOvJU2Tmv30EjbsQn1AcCG01TLKP8eI/view", "_blank")
    // }

    //==============>
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Add event listener to track scroll position
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const sectionTops = {};

        sections.forEach(section => {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                sectionTops[section] = sectionElement.offsetTop;
            }
        });

        const scrollPosition = window.scrollY + 500; // Adjust for navbar height
        let currentSection = 'home';

        for (const section in sectionTops) {
            if (scrollPosition >= sectionTops[section]) {
                currentSection = section;
            }
        }

        setActiveSection(currentSection);
    };

    return (
        <>
            <div id='nav-menu'>
                {/* For large Screens */}
                <div id="largeScreenNavbar">
                    <a href='#home'><h2>{"Ashutosh </>"}</h2></a>
                    <div className='navbarLinks'>
                        <a href='#home' className={`nav-link home ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
                        <a href='#about' className={`nav-link about ${activeSection === 'about' ? 'active' : ''}`}>About</a>
                        <a href='#skills' className={`nav-link skills ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
                        <a href='#projects' className={`nav-link projects ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
                        <a href='#contact' className={`nav-link contact ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
                    </div>
                    <div>
                        <button
                            id="resume-button-1"
                            className={`nav-link resume`}
                            onClick={downloadHandle}>
                            Resume
                        </button>

                        <a href="https://github.com/1ashutoshverma" target="_blank" className="nav-link github">
                            GitHub
                        </a>
                    </div>
                </div>
                {/* For amall Screens */}
                <div id="smallScreenNavbar">
                    <div><h2>Portfolio</h2></div>
                    <div onClick={() => { setBurger(!burger) }}>
                        <img src={burger ? "/Images/cross.svg" : "/Images/burgerMenu.svg"} alt="" />
                    </div>
                </div>
            </div >
            {
                burger ? (<div id='smallScreenDropDown' >
                    <div>
                        <a href='#home' className="nav-link home" onClick={() => { setBurger(!burger) }}>Home</a>
                        <a href='#about' className="nav-link about" onClick={() => { setBurger(!burger) }}>About</a>
                        <a href='#skills' className="nav-link skills" onClick={() => { setBurger(!burger) }}>Skills</a>
                        <a href='#projects' className="nav-link projects" onClick={() => { setBurger(!burger) }}>Projects</a>
                        <a href='#contact' className="nav-link contact" onClick={() => { setBurger(!burger) }} >Contact</a>
                        <button
                            id="resume-button-1"
                            className={`nav-link resume`}
                            onClick={() => { downloadHandle(); setBurger(!burger) }} style={{ margin: "auto", width: "100px" }}
                        >
                            Resume
                        </button>
                        <a href="https://github.com/1ashutoshverma" target="_blank" className="nav-link github" style={{ margin: "auto", width: "100px" }}
                            onClick={() => { setBurger(!burger) }}
                        >
                            GitHub
                        </a>
                    </div>
                </div>) : <></>
            }

        </>
    )
}

export default Navbar
