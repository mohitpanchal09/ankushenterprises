import React from "react";
import "./ProductDetails.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import MoreProducts from "../components/moreproducts/MoreProducts";
export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="product-details-wrapper">
        <div className="product-left">
          <img
            src="https://media.discordapp.net/attachments/1134172030699323465/1185941735457697913/image.png?ex=6591714f&is=657efc4f&hm=4e97ae9d5e712d0dd21673db2d11498c7a7e6a619c5732ad2763728680c7a69a&=&format=webp&quality=lossless&width=1056&height=1056"
            alt=""
          />
        </div>
        <div className="product-right">
          <h1 className="product-title">
            Liquid Unsaturated Polyester Resin <br /> <span>In Stock</span>
          </h1>

          <p className="product-info">
            Gel coat resin is a special resin for making the gel coat layer of
            FRP products. It is a special type of unsaturated polyester resin.
            It is mainly used on the surface of resin products. It is a
            continuous thin layer and the function of the gel coat resin on the
            surface of the product is to provide a protective layer for the base
            resin or laminate to improve the weather. It adds some extra shine
            and finishing to the products. Gelcoat is applied as the first layer
            on the negative mold. It therefore serves as the base layer. The
            glass fiber fabric is then laid on top of this and shaped to meet
            the requirements. <br /> <br />
            Gelcoat not only serves as a base layer but also as an adhesive: it
            hardens sticky on the side facing the air so that the application of
            the fiber is straightforward. Gelcoat resin coated surface is glossy
            after cured. It has good mechanical properties and water resistance
            and is resistance to mild chemicals and ultra-violet light, thus
            enhancing the durability of glassfibre reinforced plastics (GRP)
            products These resins are tailor make to meet the diverse needs of
            GRP/FRP industry and meeting the requirements of customers interest
            of improved efficiency and superior performance of finished product.
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
      <h1 className="more-products">
        More &nbsp; <span className="bg-red">Products</span>
      </h1>
      <MoreProducts />

      <Footer />
    </>
  );
}
