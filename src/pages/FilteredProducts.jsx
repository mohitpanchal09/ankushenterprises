import React from "react";
import "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductsPage from "../components/products/ProductsPage";
import { VscHome } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import ProductList from "../components/productlist/ProductList";
export default function FilteredProducts() {
  const location = useLocation();
  const category = location.pathname.split("/")[1];

  return (
    <>
      <Navbar />
      <div className="products-page-wrapper">
        <div className="top-marks">
          <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
            <VscHome />
          </Link>
          <IoIosArrowForward />
          <span>products</span>
        </div>
        <ProductList category={category} />
      </div>
      <Footer />
    </>
  );
}
