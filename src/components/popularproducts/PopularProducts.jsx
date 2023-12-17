import React from "react";
import "./PopularProducts.css";

export default function PopularProducts() {
  const arr = [
    "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1700486009227-4b194079c197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  ];
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
                  <img src={item} alt="" />
                  <div className="red-bg"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
