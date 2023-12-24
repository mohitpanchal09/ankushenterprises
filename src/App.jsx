import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import IndustriesPage from "./pages/IndustriesPage";
import ProductDetails from "./pages/ProductDetails";
import FilteredProducts from "./pages/FilteredProducts";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/:category" element={<FilteredProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
