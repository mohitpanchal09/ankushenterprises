import React, { useState } from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import data from "../../products";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ProductList() {
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(data.length / productsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="product-list-wrapper">
      <h1>
        Our <span>Products</span>
      </h1>
      <div className="products-wrapper">
        {currentProducts.map((item, index) => (
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
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
      />
    </div>
  );
}
