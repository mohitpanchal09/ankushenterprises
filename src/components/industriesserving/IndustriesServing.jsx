import React from "react";
import "./IndustriesServing.css";
import GalleryTest from "../gallery/GalleryTest";
export default function IndustriesServing() {
  return (
    <div className="industries-serving-wrapper">
      <div className="industry-text">
        <h1>
          Industries We <span className="bg-color">Serve</span>
        </h1>
        <p>
          Over the past 18 years that we have been serving our clients, we have
          to build a strong clientele across 66 countries and across 15 myriad
          industries verticals. We have been projecting stellar performance in
          delivering some of the par excellence and cutting edge digital
          solutions to our clients.
        </p>
      </div>

      <GalleryTest />
    </div>
  );
}
