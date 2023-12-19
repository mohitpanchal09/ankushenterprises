import React, { useState, useEffect } from "react";
import data from "../../products";
import "./MoreProducts.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";
export default function MoreProducts() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [newArr, setNewArr] = useState([]);
  const responsive = {
    // superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    desktop: { breakpoint: { max: 3100, min: 1000 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 826 }, items: 3 },
    mobile: { breakpoint: { max: 826, min: 600 }, items: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };
  useEffect(() => {
    const generateRandomProducts = () => {
      let tempArr = [];
      for (let i = 0; i <= 5; i++) {
        let ind = Math.floor(Math.random() * 16);
        console.log(ind);
        if (ind !== id && !tempArr.some((item) => item.id === ind)) {
          tempArr.push(data.find((item) => item.id === ind));
        } else {
          i--; // Generate another unique ind
        }
      }
      setNewArr(tempArr);
    };

    generateRandomProducts();
  }, [id]);
  return (
    <div className="more-products-wrapper">
      <Carousel responsive={responsive}>
        {newArr.map((item, index) => (
          <div key={index} className="product">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
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
