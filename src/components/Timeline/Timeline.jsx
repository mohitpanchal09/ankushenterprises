import React from "react";
import "./Timeline.css";
import timeline from "../../assets/timeline.gif";
export default function Timeline() {
  return (
    <div className="timeline-container">
      <h1>
        Our <span>Strength</span>
      </h1>
      <img src={timeline} alt="" />
    </div>
  );
}
