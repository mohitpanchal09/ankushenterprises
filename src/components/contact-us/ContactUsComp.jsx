import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import map from "../../assets/mapImage.png";

export default function ContactUsComp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleClick = (e) => {
    console.log(formData);
    toast("Your message has been sent", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
            <input
              type="text"
              placeholder="your name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="enquiry-button"
            style={{ height: "35px", width: "150px", fontSize: "14px" }}
            onClick={handleClick}
          >
            Send Message
          </button>
          <ToastContainer containerId="an id" draggable={false} />
        </div>
      </div>

      <img className="contact-map" src={map} alt="" />
    </div>
  );
}
