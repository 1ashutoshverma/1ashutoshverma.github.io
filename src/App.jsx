import React, { useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar/Navbar'
import HomeSection from './sections/HomeSection/HomeSection'
import AboutSection from './sections/AboutSection/AboutSection'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import { TimelineComponent } from './components/Timeline/Timeline'
import { Admin } from './utils/constants'

function App() {
  return (
    <div id='App'>
      <Navbar />
      <div id='main_wrapper'>
        <HomeSection />
        <AboutSection />
        <Skills />
        <Projects />
        <TimelineComponent details={Admin.educationDetails} title={"Education"} />
        <Contact />
      </div>
    </div>
  )
}

export default App
