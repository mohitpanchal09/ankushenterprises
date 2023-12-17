import React from "react";
import "./Why.css";
import { BiLeaf, BiPackage } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrStarOutline } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";

export default function Why() {
  return (
    <div className="why-wrapper">
      <h1>
        Why Choose <span>Us</span>
      </h1>
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
  );
}
