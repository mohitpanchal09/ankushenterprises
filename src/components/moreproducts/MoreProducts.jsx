import React from "react";
import imgArray from "../../data";
import "./MoreProducts.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function MoreProducts() {
  const responsive = {
    // superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    desktop: { breakpoint: { max: 3100, min: 1000 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 826 }, items: 3 },
    mobile: { breakpoint: { max: 826, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };
  const newArr = imgArray.slice(0, 7);

  return (
    <div className="more-products-wrapper">
      <Carousel responsive={responsive}>
        {newArr.map((item, index) => (
          <div key={index} className="product">
            <img src={item} alt="" />
            <p>Liquid Unsaturated Polyester Resin</p>
            <div className="buttons">
              <button className="btn-1">View Product</button>
              <Link to="/contact-us" style={{ textDecoration: "none" }}>
                <button className="btn-2">Enquiry Now</button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
