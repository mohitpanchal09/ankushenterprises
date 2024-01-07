import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import "../components/why/Why.css";
import { BiLeaf, BiPackage } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrStarOutline } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";
import AboutUsFirst from "../components/aboutusfirst/AboutUsFirst";
import aboutusesecond from "../assets/aboutusesecond.png";
import chemicals from "../assets/chemicals.webp";
import { Link } from "react-router-dom";
import Newsletter from "../Newsletter";
export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsFirst />
      <div className="about-us-bg" style={{ padding: "100px 0" }}>
        <div className="why-3">
          <div className="why-1">{/* <img src={chemicals} alt="" /> */}</div>
          <div className="why-2">
            <h1>
              MISSION :
              <span className="signature">
                &nbsp; Advancing Chemistry for a Sustainable Future
              </span>
            </h1>
            <br />
            <p>
              "Driven by a commitment to catalyzing innovation and molecular
              precision, our mission is to synthesize transformative chemical
              solutions that redefine industry standards. By leveraging our
              expertise in molecular engineering and chemical synthesis, we aim
              to pioneer sustainable formulations, fostering a safer, cleaner,
              and more efficient world. We relentlessly pursue excellence in
              chemical design, leveraging cutting-edge technologies to engineer
              compounds that empower industries, enhance lives, and propel the
              frontier of scientific discovery." Our mission at Ankush
              Enterprises is to provide reliable and superior-quality chemicals
              that meet the evolving needs of our customers. We aim to be a
              preferred supplier, delivering innovative solutions and
              exceptional service to support our clients' success and contribute
              to their growth.
            </p>
            {/* <div className="why-2-inner" style={{ display: "none" }}>
              <div className="icon-container">
                <span className="grid-symbol">
                  <BiLeaf />
                </span>
                <div className="icon-text">
                  <p className="icon-heading">100% Organic food</p>
                  <p className="icon-sub-text">100% healthy & Fresh food.</p>
                </div>
              </div>
              <div className="icon-container">
                <span className="grid-symbol">
                  <TfiHeadphoneAlt />
                </span>
                <div className="icon-text">
                  <p className="icon-heading">Great Support 24/7</p>
                  <p className="icon-sub-text">Instant access to Contact.</p>
                </div>
              </div>
              <div className="icon-container">
                <span className="grid-symbol">
                  <GrStarOutline />
                </span>
                <div className="icon-text">
                  <p className="icon-heading">Customer Feedback</p>
                  <p className="icon-sub-text">Our happy customer</p>
                </div>
              </div>
              <div className="icon-container">
                <span className="grid-symbol">
                  <HiOutlineShoppingBag />
                </span>
                <div className="icon-text">
                  <p className="icon-heading">100% Sucure Payment</p>
                  <p className="icon-sub-text">We ensure your money is save</p>
                </div>
              </div>
              <div className="icon-container">
                <span className="grid-symbol">
                  <FaTruckFast />
                </span>
                <div className="icon-text">
                  <p className="icon-heading">Free Shipping</p>
                  <p className="icon-sub-text">Free shipping with discount.</p>
                </div>
              </div>
              <div className="icon-container">
                <span className="grid-symbol">
                  <BiPackage />
                </span>
                <div className="icon-text">
                  <p className="icon-heading">100% Organic food</p>
                  <p className="icon-sub-text">100% healthy & Fresh food.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="about-us-first-inner">
        <div className="about-us-first-1">
          <h1>Our Odyssey in Chemical Expertise</h1>
          <p>
            Our journey started with a passion for chemistry and an insatiable
            curiosity for the boundless potential of polyester resins. We
            immersed ourselves in the world of chemical innovation, continually
            seeking ways to improve formulas and adapt to the evolving needs of
            our customers.
          </p>
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
        <div className="about-us-first-2">
          <img src={aboutusesecond} alt="" />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
