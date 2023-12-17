import React from "react";
import "./Welcome.css";
import welcomeVideo from "../../assets/video/ankush-video.gif";
import ControlledCarousel from "../carousel/ControlledCarousel";

export default function Welcome() {
  return (
    <>
      <div className="welcome-container">
        <img src={welcomeVideo} alt="" className="welcome-video" />
      </div>
      <div className="welcome-inner-container">
        <ControlledCarousel />
      </div>
    </>
  );
}
