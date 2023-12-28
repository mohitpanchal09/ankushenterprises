import React from "react";
import "./ProductDetails.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import MoreProducts from "../components/moreproducts/MoreProducts";
import { useLocation } from "react-router-dom";
import data from ".././products";
export default function ProductDetails() {
  const location = useLocation();
  const str = location.pathname;
  const arr = str.split("/");
  const id = arr[arr.length - 1];
  const prd = data.find((item) => {
    return item.id == id;
  });

  return (
    <>
      <Navbar />
      <div className="product-details-wrapper">
        <div className="product-left">
          <img src={prd.img} alt="" />
        </div>
        <div className="product-right">
          <h1 className="product-title">
            {prd.title} <br /> <span>In Stock</span>
          </h1>

          <p className="product-info">
            {prd.desc} <br />
            <ul>
              {/* Map through features array and render each feature as an li element */}
              {prd.features &&
                prd.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
            </ul>{" "}
          </p>

          <Link
            to="/contact-us"
            style={{ textDecoration: "none", marginBottom: "30px" }}
          >
            {" "}
            <button className="enquiry-button" style={{ marginBottom: "30px" }}>
              Enquiry Now &nbsp;{" "}
              <svg
                width="21"
                height="17"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0377 8.59497H1.45282"
                  stroke="white"
                  stroke-width="1.85849"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5418 1.13L20.0378 8.5937L12.5418 16.0586"
                  stroke="white"
                  stroke-width="1.85849"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <h1 className="more-products" style={{ marginTop: "50px" }}>
        More &nbsp; <span className="bg-red">Products</span>
      </h1>
      <MoreProducts />

      <Footer />
    </>
  );
}
