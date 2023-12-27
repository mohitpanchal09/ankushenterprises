import React from "react";
import "./PopularProducts.css";
import data from "../../products";

export default function PopularProducts() {
  const arr = data.slice(0, 6);
  return (
    <div className="popular-products">
      <h1>
        Popular <span>Products</span>
      </h1>
      <div className="slick-card-container">
        {arr.map((item) => {
          return (
            <div className="slick-card01">
              <div className="slick-inner-card">
                <div className="img-container-prod">
                  <img src={item.img} alt="" />
                  <div className="red-bg">{item.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
