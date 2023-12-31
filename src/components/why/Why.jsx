import React from "react";
import "./Why.css";
import { BiLeaf } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrTechnology } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";
import {
  MdAttachMoney,
  MdOutlineScience,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Why() {
  return (
    <div className="why-wrapper">
      <h1>
        Why Choose <span>Us</span>
      </h1>
      <div className="why-3">
        <div className="why-1">
          {/* <img src="../../assets/whybg.png" alt="" /> */}
        </div>
        <div className="why-2">
          <h1>
            Quality is Our{" "}
            <span className="signature">
              Signaure: <br /> The catalyst towards development
            </span>{" "}
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
                <p className="icon-heading">Superior quality</p>
                {/* <p className="icon-sub-text">100% healthy & Fresh food.</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <TfiHeadphoneAlt />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Comprehensive support</p>
                {/* <p className="icon-sub-text">Instant access to Contact.</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <MdOutlinePrecisionManufacturing />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Customization</p>
                {/* <p className="icon-sub-text">Our happy customer</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <GrTechnology />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Advanced technology</p>
                {/* <p className="icon-sub-text">We ensure your money is save</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <BiLeaf />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Environmental sustaintability</p>
                {/* <p className="icon-sub-text">Free shipping with discount.</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <MdAttachMoney />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Cost effectiveness</p>
                {/* <p className="icon-sub-text">100% healthy & Fresh food.</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <LiaIndustrySolid />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Industry expertise</p>
                {/* <p className="icon-sub-text">We ensure your money is save</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <AiOutlineGlobal />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Global Search</p>
                {/* <p className="icon-sub-text">We ensure your money is save</p> */}
              </div>
            </div>
            <div className="icon-container">
              <span className="grid-symbol">
                <MdOutlineScience />
              </span>
              <div className="icon-text">
                <p className="icon-heading">Continuous innovation</p>
                {/* <p className="icon-sub-text">We ensure your money is save</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
