import React from "react";
import "./ContactUs.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import map from "../../assets/map image.png";
export default function ContactUsComp() {
  return (
    <div className="contact-us-wrapper">
      <h1>
        Contact <span>Us</span>
      </h1>
      <div className="contact-container">
        <div className="contact-left">
          <div className="left-1">
            <p className="contact-symbol">
              <CiLocationOn />
            </p>
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
          <div
            className="left-1"
            style={{
              borderTop: "0.7px solid lightgray",
              borderBottom: "0.7px solid lightgray",
            }}
          >
            <p className="contact-symbol">
              <AiOutlineMail />
            </p>
            <p>proxy@gmail.com</p>
          </div>
          <div className="left-1">
            <p className="contact-symbol">
              <LiaPhoneVolumeSolid />
            </p>
            <p>
              (219) 555-0114 <br />
              (164) 333-0487
            </p>
          </div>
        </div>
        <div className="contact-right">
          <h1>Just Say Hello!</h1>
          <p>
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>
          <div className="contact-input-line-1">
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="email" />
          </div>
          <input type="text" placeholder="subject" id="subject" />
          <input type="text" placeholder="message" id="message" />
          <button
            className="enquiry-button"
            style={{ height: "35px", width: "150px", fontSize: "14px" }}
          >
            Send Message
          </button>
        </div>
      </div>
      <img className="contact-map" src={map} alt="" />
    </div>
  );
}
