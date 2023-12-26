import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./GalleryTest.css";
import imageArray from "../../data";
// import pic23 from "../../assets/industries-images/pic23.jpg";
// import pic2 from "../../assets/industries-images/pic2.jpg";
// import pic3 from "../../assets/industries-images/pic3.jpg";
// import pic4 from "../../assets/industries-images/pic4.jpg";
// import pic5 from "../../assets/industries-images/pic5.jpg";
// import pic6 from "../../assets/industries-images/pic6.jpg";
// import pic7 from "../../assets/industries-images/pic7.jpg";
// import pic8 from "../../assets/industries-images/pic8.jpg";
// import pic10 from "../../assets/industries-images/pic10.jpg";
// import pic9 from "../../assets/industries-images/pic9.jpg";
// import pic11 from "../../assets/industries-images/pic11.jpg";
// import pic12 from "../../assets/industries-images/pic12.jpg";
// import pic13 from "../../assets/industries-images/pic13.jpg";
// import pic14 from "../../assets/industries-images/pic14.jpg";
// import pic15 from "../../assets/industries-images/pic15.jpg";
// import pic16 from "../../assets/industries-images/pic16.jpg";
// import pic17 from "../../assets/industries-images/pic17.jpg";
// import pic18 from "../../assets/industries-images/pic18.jpg";
// import pic19 from "../../assets/industries-images/pic19.jpg";
// import pic20 from "../../assets/industries-images/pic20.jpg";
// import pic21 from "../../assets/industries-images/pic21.jpg";
// import pic22 from "../../assets/industries-images/pic22.jpg";

export default function GalleryTest() {
  // const images = [
  //   pic2,

  //   pic4,
  //   pic5,
  //   pic6,
  //   pic9,
  //   pic10,
  //   pic11,
  //   pic12,
  //   pic13,
  //   pic14,
  //   pic15,
  //   pic16,
  //   pic17,
  //   pic18,
  //   pic19,
  //   pic20,
  //   pic21,
  //   pic22,
  //   pic3,
  // ];

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="10px" className="gallery-wrapper">
          {imageArray.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
