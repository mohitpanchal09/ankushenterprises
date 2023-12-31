import { useState } from "react";
import "./ControlledCarousel.css";
import ankushChemicalPlate from "../../assets/f1.webp";
import { Link } from "react-router-dom";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-1-container">
      <img src={ankushChemicalPlate} alt="" />
      <div className="carousel-text-content-1">
        <p className="first-text">WELCOME TO</p>
        <span className="second-text">
          ANKUSH <br /> <p className="enterprises">ENTERPRISES</p>
        </span>
        <p className="third-text">Your Source for Premium Polyster Reisin</p>
        <Link to="/contact-us" style={{ textDecoration: "none" }}>
          {" "}
          <button className="enquiry-button">
            Enquiry Now &nbsp;{" "}
            <svg
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0377 8.59497H1.45282"
                stroke="white"
                stroke-width="1.85849"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5418 1.13L20.0378 8.5937L12.5418 16.0586"
                stroke="white"
                stroke-width="1.85849"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ControlledCarousel;
