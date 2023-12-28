import React from "react";
import "./introSection.css";

function IntroSection(props) {
  return (
    <div className="lv-intro-wrapper" ref={props.section1}>
      <div className="lv-intro-col1">
        <div className="lv-intro-col1row1">
          <span className="lv-intro-col1row1txt1">Hi,</span>&nbsp; &nbsp;
          <span className="lv-intro-col1row1txt2">I'm</span>
        </div>
        <div className="lv-intro-col1row2">Bhagya Dissanayaka</div>
        <div className="lv-intro-col1row3">
          <div className="lv-intro-col1row3hrl"></div>
          <div className="lv-intro-col1row3txt">
            <div className="lv-intro-col1row3txt1"></div>
            <div className="lv-intro-col1row3txt2">Front-end Developer</div>
          </div>
        </div>
        <div className="lv-intro-col1row4">
          "I create responsive, cross-browser websites you'd love to experience"
        </div>
      </div>
      <div className="lv-intro-col2">
        <img src="./bhagya.png" alt="me" className="lv-intro-col2Me" />
      </div>
    </div>
  );
}

export default IntroSection;
