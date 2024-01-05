import React from "react";
import "./Footer.css";
import logo from "../../assets/logo2.svg";
import payment from "../../assets/payment.webp";
export default function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <ul className="con-01">
          <li className="logo-container">
            <img width="159.112px" height="109.101px" src={logo} alt="" />
          </li>
          <li
            style={{ width: "100%", color: "#ffff" }}
            className="footer-list-item"
          >
            <span>(+91) 9990615104</span>
            &nbsp; or &nbsp;
            <span>ankushenterprises001@gmail.com</span>
          </li>
        </ul>
        <ul className="con-1">
          <li className="heading-item">My Accounts</li>
          <li className="footer-list-item">My Account</li>
          <li className="footer-list-item">Order History</li>
          <li className="footer-list-item">Shopping Cart</li>
          <li className="footer-list-item">Wishlist</li>
        </ul>
        <ul className="con-1">
          <li className="heading-item">Helps</li>
          <li className="footer-list-item">Contact</li>
          <li className="footer-list-item">FAQs</li>
          <li className="footer-list-item">Terms & Conditions</li>
          <li className="footer-list-item">Privacy Policy</li>
        </ul>
        <ul className="con-1">
          <li className="heading-item">Proxy</li>
          <li className="footer-list-item">About</li>
          <li className="footer-list-item">Shop</li>
          <li className="footer-list-item">Product</li>
          <li className="footer-list-item">Track Order</li>
        </ul>

        <ul className="con-1">
          <li className="heading-item">Categories</li>
          <li className="footer-list-item">Fruit & Vegetables</li>
          <li className="footer-list-item">Meat & Fish</li>
          <li className="footer-list-item">Bread & Bakery</li>
          <li className="footer-list-item">Beauty & Health</li>
        </ul>
      </footer>
      <div className="footer-bottom">
        <li className="footer-list-item">
          Ankush Enterprises © 2023. All Rights Reserved
        </li>
        <li className="footer-list-item">
          <img src={payment} alt="" width="250" />
        </li>
      </div>
    </div>
  );
}
