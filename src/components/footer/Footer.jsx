import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <ul className="con-01">
          <li className="logo-container">
            <img
              width="159.112px"
              height="109.101px"
              src="https://media.discordapp.net/attachments/1134172030699323465/1184561444285579345/image.png?ex=658c6bd0&is=6579f6d0&hm=6b6aa83f8c7280b2950908606972e0de16fe9388dde4ca9e6703d90f6fbb0dda&=&format=webp&quality=lossless&width=638&height=438"
              alt=""
            />
          </li>
          <li
            style={{ width: "100%", color: "#ffff" }}
            className="footer-list-item"
          >
            <span>(219) 555-0114</span>
            &nbsp; or &nbsp;
            <span> Proxy@gmail.com</span>
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
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1184578992779567104/image.png?ex=658c7c28&is=657a0728&hm=180a7856f0e99422ae8838c0d7e226919db9711f1bddb0d49d63f902330a8f79&=&format=webp&quality=lossless&width=1108&height=130"
            alt=""
            width="250"
          />
        </li>
      </div>
    </div>
  );
}
