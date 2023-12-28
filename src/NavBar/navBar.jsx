import React from "react";
import "./navBar.css";

function NavBar(props) {
  return (
    <div className="lv-navbar-wrapper">
      <div className="lv-navbar-col1">
        <p className="flip_text">Bhagya's Portfolio</p>
      </div>
      <div className="lv-navbar-col2">
        <div
          className="lv-navbar-col2col1"
          onClick={() => props.scrollToSection(props.section1)}
        >
          Home
        </div>
        <div
          className="lv-navbar-col2col2"
          onClick={() => props.scrollToSection(props.section2)}
        >
          Projects
        </div>
        <div
          className="lv-navbar-col2col3"
          onClick={() => props.scrollToSection(props.section3)}
        >
          About
        </div>
        <div
          className="lv-navbar-col2col4"
          onClick={() => props.scrollToSection(props.section4)}
        >
          Contact
        </div>
      </div>
    </div>
  );
}

export default NavBar;
