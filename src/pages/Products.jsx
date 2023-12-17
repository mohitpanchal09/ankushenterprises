import React from "react";
import "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductsPage from "../components/products/ProductsPage";

export default function Products() {
  return (
    <>
      <Navbar />
      <ProductsPage />
      <Footer />
    </>
  );
}
