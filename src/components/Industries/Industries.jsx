import React from "react";
import "./Industries.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import grid1 from "../../assets/grid1.webp";
import grid2 from "../../assets/grid2.webp";
import grid3 from "../../assets/grid3.webp";
import grid4 from "../../assets/grid4.webp";

export default function Industries() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="industries-wrapper">
      <h1>
        Industries We <span className="bg-color">Serve</span>
      </h1>
      <p>
        Over the past 16 years that we have been serving our clients, we have to
        build a strong clientele across 66 countries and across 15 myriad
        industries verticals. We have been projecting stellar performance in
        delivering some of the par excellence and cutting edge digital solutions
        to our clients.
      </p>
      <div className="images-grid-wrappper">
        <div className="column1">
          <img src={grid1} alt="" style={{ height: "100%" }} />
        </div>

        <div className="column2">
          <img src={grid2} alt="" />
          <img src={grid3} alt="" />
        </div>
        <div className="column3">
          <img src={grid4} alt="" />
        </div>
      </div>
      <Link to="/industries">
        <button className="read-more">Read more</button>
      </Link>
    </div>
  );
}
