import React from "react";
import "./aboutSec.css";

function AboutSec(props) {
  const handleDownload = () => {};
  return (
    <div className="lv-about-wrapper" ref={props.section3}>
      <div className="lv-about-row1 ">
        <p className="flip_text2">About me</p>
      </div>
      <div className="lv-about-row2">
        <div className="lv-about-row2col1">
          <div className="lv-about-row2col1x">
            <div className="lv-about-row2col11"></div>
            <div className="lv-about-row2col12">Yes that's me</div>
          </div>
          <div className="lv-about-row2col13">
            <img
              src="./bhagya2.jpg"
              alt="me"
              className="lv-about-row2col13img"
            />
          </div>
          <div className="lv-about-row2col14">
            <div class="social-links">
              <a href="https://github.com/bndissanayaka" target="_blank">
                <img src="./github.png" className="social-img" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhagyadissanayaka/"
                target="_blank"
              >
                <img src="./linked.png" className="social-img" alt="" />
              </a>

              <a href="mailto:bndissanayaka@gmail.com" target="_blank">
                <img src="./email.png" className="social-img" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="lv-about-row2col2">
          <p className="lv-about-row2col2txt">
            I'm a front-end developer based in Colombo, SL. with 7+ years of
            overall experience in software development. I have experience in
            ReactJS, JavaScript, CSS, HTML and Redux. I love translating
            solutions into code and working across many different APIs,
            third-party integrations and databases.
          </p>
          <div className="lv-about-row2col2btn" onClick={handleDownload}>
            <a
              className="lv-about-row2col2btn"
              href="./documents/DAB Nirmani-Resume.pdf"
              title=""
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSec;
