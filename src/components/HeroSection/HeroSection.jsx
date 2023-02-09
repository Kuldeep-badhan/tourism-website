import React from "react";

import "./HeroSection.css";
import videoSrc from "../../assets/videos/video-2.mp4";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className="hero_section_container">
      {/* <video src={videoSrc} autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero_btns">
        <Button
          className="btns"
          buttonStyle={"btn--outlined"}
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button className="btns" buttonSize={"btn--large"}>
          WATCH TRAILER <i className="far fa-play-circle" />{" "}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
