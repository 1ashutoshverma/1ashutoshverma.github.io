// app/page.js
import AboutSection from "@/components/AboutSection/AboutSection";
import Contact from "@/components/Contact/Contact";
import HomeSection from "@/components/HomeSection/HomeSection";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { TimelineComponent } from "@/components/Timeline/Timeline";
import { Admin } from "@/utils/constants";
import React from "react";

export default function HomePage() {
  return (
    <div id="App">
      <div id="main_wrapper">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <Skills />
        <Projects />
        {/* <TimelineComponent
          details={Admin.educationDetails}
          title={"Education"}
        /> */}
        <Contact />
      </div>
    </div>
  );
}
