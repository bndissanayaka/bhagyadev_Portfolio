import React, { useState } from "react";
import "./projects.css";
import { Link } from "react-router-dom";
function Projects(props) {
  const [opasity, setOpasity] = useState(1);
  const [background, setbackground] = useState("");
  const [showDescp, setshowDescp] = useState(false);
  const [showDescp2, setshowDescp2] = useState(false);
  const handleMouseOver = () => {
    setbackground("black");
    setOpasity(0.5);
    setshowDescp(true);
  };
  const handleMouseOut = () => {
    setbackground("black");
    setOpasity(1);
    setshowDescp(false);
  };

  const handleMouseOver2 = () => {
    setbackground("black");
    setOpasity(0.5);
    setshowDescp2(true);
  };
  const handleMouseOut2 = () => {
    setbackground("black");
    setOpasity(1);
    setshowDescp2(false);
  };

  return (
    <div ref={props.section2}>
      <div className="lv-skillsSec-title">
        <p className="flip_text2">Projects</p>
      </div>

      <div className="lv-projects-wrapper" style={{ marginTop: "6vw" }}>
        <div className="lv-projects-col1">
          <div
            className="lv-projects-col1layer1"
            style={{ opacity: `${opasity}`, backgroundColor: `${background}` }}
          >
            <img
              src="./vid1.gif"
              alt="project1"
              className="lv-projects-proj1"
            />
          </div>
          <div
            className="lv-projects-col1layer2"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {showDescp && (
              <>
                <a
                  href="https://lassana.com/"
                  className="lv-projects-link1"
                  target="_blank"
                >
                  <p className="lv-projects-col1layer2txt1">Lassana.com</p>
                </a>
                <p className="lv-projects-col1layer2txt2">
                  Premium e-commerce web site selling goods online
                </p>
                <div className="lv-projects-col1layer2txtx">
                  <span className="lv-projects-col1layer2txt3">ReactJS</span>
                  <span className="lv-projects-col1layer2txt3">JavaScript</span>
                  <span className="lv-projects-col1layer2txt3">CSS</span>
                  <span className="lv-projects-col1layer2txt3">HTML</span>
                  <span className="lv-projects-col1layer2txt3">Redux</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="lv-projects-col2">
          <div
            className="lv-projects-col1layer1"
            style={{ opacity: `${opasity}`, backgroundColor: `${background}` }}
          >
            <img
              src="./vid2.gif"
              alt="project1"
              className="lv-projects-proj1"
            />
          </div>
          <div
            className="lv-projects-col1layer2"
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            {showDescp2 && (
              <>
                <a
                  href="https://lassana.com/"
                  className="lv-projects-link1"
                  target="_blank"
                >
                  <p className="lv-projects-col1layer2txt1">My Portfolio</p>
                </a>
                <p className="lv-projects-col1layer2txt2">
                  A testimony of my passion for frontend development
                </p>
                <div className="lv-projects-col1layer2txtx">
                  <span className="lv-projects-col1layer2txt3">ReactJS</span>
                  <span className="lv-projects-col1layer2txt3">JavaScript</span>
                  <span className="lv-projects-col1layer2txt3">CSS</span>
                  <span className="lv-projects-col1layer2txt3">HTML</span>
                  <span className="lv-projects-col1layer2txt3">Redux</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
