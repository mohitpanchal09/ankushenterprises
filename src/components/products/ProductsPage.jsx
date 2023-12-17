import React from "react";
import "./productsPage.css";
import { VscHome } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import ProductList from "../productlist/ProductList";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div className="products-page-wrapper">
      <div className="top-marks">
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          <VscHome />
        </Link>
        <IoIosArrowForward />
        <span>products</span>
      </div>
      {/* <img src={chemicalVideo} alt="" className="chemical-video-product" /> */}
      <ProductList />
    </div>
  );
}
