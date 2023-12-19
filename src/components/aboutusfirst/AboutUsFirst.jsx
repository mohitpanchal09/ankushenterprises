import React from "react";
import "./aboutusfirst.css";
import aboutusfirst from "../../assets/aboutusfirst.png";
export default function AboutUsFirst() {
  return (
    <div className="about-us-container">
      <h1>
        About <span>Us</span>
      </h1>
      <div className="about-us-first-inner">
        <div className="about-us-first-1">
          <h1>Our Journey: Crafting Excellence in Polyester Resin Chemicals</h1>
          <p>
            At Ankush Enterprises, our story is one of unwavering commitment,
            innovation, and the pursuit of excellence in the world of polyester
            resin chemicals. We don't just sell chemicals; we provide the
            building blocks of progress, enabling industries to transform ideas
            into reality.
          </p>
        </div>
        <div className="about-us-first-2">
          <img src={aboutusfirst} alt="" />
        </div>
      </div>
    </div>
  );
}
