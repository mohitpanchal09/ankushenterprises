import React, { useState } from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import data from "../../products";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";

export default function ProductList(props) {
  const { category } = props;

  // const productsPerPage = 6;
  // const [currentPage, setCurrentPage] = useState(0);
  const filteredProducts = category
    ? data.filter((item) => item.category == category)
    : data;

  // const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = filteredProducts.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );

  // const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // const handlePageClick = (filteredProducts) => {
  //   setCurrentPage(filteredProducts.selected);
  // };
  if (filteredProducts.length === 0) {
    return (
      <div
        className="product-list-wrapper"
        style={{
          height: "50vh",
        }}
      >
        <h1>
          Our <span>Products</span>
        </h1>
        <p style={{ textAlign: "center", margin: "70px 0" }}>
          No products found.
        </p>
      </div>
    );
  }

  return (
    <div className="product-list-wrapper">
      <h1>
        Our <span>Products</span>
      </h1>
      <div className="products-wrapper">
        {filteredProducts.map((item, index) => (
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
        ))}
      </div>
      {/* <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
      /> */}
    </div>
  );
}
