import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import map from "../../assets/mapImage.png";
import emailjs from "@emailjs/browser";

export default function ContactUsComp() {
  const [loading, setLoading] = useState(false);
  const serviceId = "service_1vz2zz9";
  const templateId = "template_u9bgf0g";
  const publicKey = "KVrN2AqOkPLV4NAmL";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleClick = (e) => {
    if (
      formData.name != "" &&
      formData.email != "" &&
      formData.subject != "" &&
      formData.message != "" &&
      formData.phone != ""
    ) {
      e.preventDefault();
      const form = document.getElementById("yourFormId");
      setLoading(true);
      emailjs
        .sendForm(serviceId, templateId, form, publicKey)
        .then(
          (result) => {
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
          },
          (error) => {
            console.error("Error sending email:", error);
            toast.error("Error sending your message. Please try again later.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        )
        .finally(() => {
          setLoading(false);
        });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
    } else {
      toast.error("Fill all the details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
              <FaWhatsapp />
            </p>
            <p>+91 9990615104</p>
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
            <p>ankushenterprises001@gmail.com</p>
          </div>
          <div className="left-1">
            <p className="contact-symbol">
              <LiaPhoneVolumeSolid />
            </p>
            <p>
              +91 9990615104
              {/* (164) 333-0487 */}
            </p>
          </div>
        </div>
        <div className="contact-right">
          <h1>Just Say Hello!</h1>
          <p>
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>
          <form id="yourFormId">
            <div className="contact-input-line-1">
              <input
                type="text"
                placeholder="your name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="phone"
                placeholder="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="requirement"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              type="text"
              placeholder="message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              required
            />
            <button
              className="enquiry-button"
              style={{ height: "35px", width: "150px", fontSize: "14px" }}
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          <ToastContainer containerId="an id" draggable={false} />
        </div>
      </div>

      <img className="contact-map" src={map} alt="" />
    </div>
  );
}
