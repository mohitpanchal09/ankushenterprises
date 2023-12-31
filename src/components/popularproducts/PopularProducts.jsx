import React from "react";
import "./PopularProducts.css";
import data from "../../products";
import { Link } from "react-router-dom";

export default function PopularProducts() {
  const arr = data.slice(6, 12);
  return (
    <div className="popular-products">
      <h1>
        Popular <span>Products</span>
      </h1>
      <div className="slick-card-container">
        {arr.map((item, index) => {
          return (
            <div className="product" key={index}>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              <div className="buttons">
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn-1">View Product</button>
                </Link>
                <Link to="/contact-us" style={{ textDecoration: "none" }}>
                  <button className="btn-2">Enquiry Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
