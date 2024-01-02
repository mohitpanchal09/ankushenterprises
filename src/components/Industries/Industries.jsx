import React from "react";
import "./Industries.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import grid1 from "../../assets/industries-images/pic10.jpg";
import grid2 from "../../assets/industries-images/pic11.jpg";
import grid3 from "../../assets/industries-images/pic12.jpg";
import grid4 from "../../assets/industries-images/pic14.jpg";

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
        Over the past 18 years that we have been serving our clients, we have to
        build a strong clientele across 66 countries and across 15 myriad
        industries verticals. We have been projecting stellar performance in
        delivering some of the par excellence and cutting edge digital solutions
        to our clients.
      </p>
      <div className="images-grid-wrappper">
        <div className="column1" style={{ position: "relative" }}>
          <img src={grid1} alt="" style={{ height: "98%" }} />
          <div className="image-text">Automobile Industry</div>
        </div>

        <div className="column2">
          <div className="" style={{ position: "relative" }}>
            <img src={grid2} alt="" style={{ height: "50%" }} />
            <div className="image-text">Chemical Industry</div>
          </div>
          <div className="" style={{ position: "relative" }}>
            <img src={grid3} alt="" style={{ height: "50%" }} />
            <div className="image-text">Transport Industry</div>
          </div>
        </div>
        <div className="column3" style={{ position: "relative" }}>
          <img src={grid4} alt="" style={{ height: "98%" }} />
          <div className="image-text">Filament Winding Industry</div>
        </div>
      </div>
      <Link to="/industries">
        <button className="read-more">Read more</button>
      </Link>
    </div>
  );
}
