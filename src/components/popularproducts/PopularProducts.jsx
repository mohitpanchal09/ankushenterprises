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
        {arr.map((item) => {
          return (
            <div className="slick-card01">
              <div className="slick-inner-card">
                <div className="img-container-prod">
                  <img src={item.img} alt="" />
                  <div className="red-bg">
                    {item.title}
                    <div className="popular-products-button">
                      <Link to={`/product/${item.id}`}>
                        <button
                          style={{
                            backgroundColor: "#ED1D2B",
                            color: "white",
                            borderRadius: "30px",
                            border: "none",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          View Product
                        </button>
                      </Link>
                      <Link to={`/contact-us`}>
                        <button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "30px",
                            border: "none",
                            fontSize: "12px",
                            padding: "5px",
                          }}
                        >
                          Enquiry now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
