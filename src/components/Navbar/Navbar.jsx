import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import resume from "./MyResume.pdf"
function Navbar() {
    const [burger, setBurger] = useState(false);

    const downloadHandle = () => {
        const link = document.createElement("a");
        link.download = "Ashutosh_Resume.pdf";
        link.href = resume;
        link.click();
        window.open(
            "https://drive.google.com/file/d/15GPVu26v2bPbnt43GOcV54BeKHRHS9Cg/view?usp=drive_link",
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
                        {/* <a href="./MyResume.pdf" download="1ashutoshverma.pdf">
                            <button className="nav-link resume" id="resume-button-1" onClick={c}>
                                Resume
                            </button>
                        </a> */}

                        <button
                            id="resume-button-1"
                            className={`nav-link resume`}
                            onClick={downloadHandle}>
                            Resume
                        </button>

                        <a href="https://github.com/1ashutoshverma" target="_blank" className="nav-link github">
                            {/* <button className="nav-link github"> */}
                            GitHub
                            {/* </button> */}
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
                        <a href='#home' className="nav-link home">Home</a>
                        <a href='#about' className="nav-link about">About</a>
                        <a href='#skills' className="nav-link skills">Skills</a>
                        <a href='#projects' className="nav-link projects">Projects</a>
                        <a href='#contact' className="nav-link contact">Contact</a>
                        {/* <a href="./MyResume.pdf" download="1ashutoshverma.pdf" onClick={() => { window.open("https://drive.google.com/file/d/15AOvJU2Tmv30EjbsQn1AcCG01TLKP8eI/view", "_blank") }}>
                            <button>Resume</button>
                        </a> */}
                        {/* <a href="https://github.com/1ashutoshverma" target="_blank" >
                            <button>GitHub</button>
                        </a> */}
                    </div>
                </div>) : <></>
            }

        </>
    )
}

export default Navbar
