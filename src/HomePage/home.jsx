import React, { useRef } from "react";
import "./home.css";
import NavBar from "../NavBar/navBar";
import IntroSection from "../IntroSection/introSection";
import AboutSec from "../AboutMe/aboutSec";
import Skills from "../SkillsSection/skills";
import Projects from "../Projects/projects";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";

function Home() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="lv-home-sec1">
      <NavBar
        scrollToSection={scrollToSection}
        section1={section1}
        section3={section3}
        section2={section2}
        section4={section4}
      />
      <IntroSection section1={section1} />
      <AboutSec section3={section3} />
      <Skills />
      <Projects section2={section2} />
      <Contact section4={section4} />
      <Footer />
    </div>
  );
}

export default Home;
