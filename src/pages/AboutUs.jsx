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
export default function AboutUs() {
  return (
    <>
      <Navbar />
      <AboutUsFirst />
      <div className="why-wrapper about-us-bg" style={{ height: "100vh" }}>
        <div className="why-3">
          <div className="why-1">
            <img
              src="https://media.discordapp.net/attachments/1134172030699323465/1184958530155986974/image.png?ex=658ddda1&is=657b68a1&hm=52566d47885e835eeafc44987197c64489ba37680f8b3612b65e7cc61db7cd4e&=&format=webp&quality=lossless&width=1056&height=1056"
              alt=""
            />
          </div>
          <div className="why-2">
            <h1>
              Quality is Our <span className="signature">Signaure</span>{" "}
            </h1>
            <br />
            <p>
              At Ankush Enterprises, quality isn't just a term; it's our
              signature. We've diligently sourced the finest raw materials,
              established rigorous quality control standards, and collaborated
              with top-notch manufacturers to ensure that our customers receive
              only the best.
            </p>
            <div className="why-2-inner">
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
            </div>
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
        </div>
        <div className="about-us-first-2">
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1185238630218870884/image.png?ex=658ee27e&is=657c6d7e&hm=75f8cbdde9bd4ae2640ffc0379d7b9bd63e711e8b9d362f9ea7886119305788a&=&format=webp&quality=lossless&width=1560&height=1056"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
