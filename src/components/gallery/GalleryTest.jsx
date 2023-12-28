import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./GalleryTest.css";
import pic1 from "../../assets/industries-images/pic1.jpg";
import pic2 from "../../assets/industries-images/pic2.jpg";
import pic3 from "../../assets/industries-images/pic3.jpg";
import pic4 from "../../assets/industries-images/pic4.jpg";
import pic5 from "../../assets/industries-images/pic5.jpg";
import pic6 from "../../assets/industries-images/pic6.jpg";
import pic7 from "../../assets/industries-images/pic7.jpg";
import pic8 from "../../assets/industries-images/pic8.jpg";
import pic10 from "../../assets/industries-images/pic10.jpg";
import pic9 from "../../assets/industries-images/pic9.jpg";
import pic11 from "../../assets/industries-images/pic11.jpg";
import pic12 from "../../assets/industries-images/pic12.jpg";
import pic13 from "../../assets/industries-images/pic13.jpg";
import pic14 from "../../assets/industries-images/pic14.jpg";
import pic15 from "../../assets/industries-images/pic15.jpg";
import pic16 from "../../assets/industries-images/pic16.jpg";
import pic17 from "../../assets/industries-images/pic17.jpg";
import pic18 from "../../assets/industries-images/pic18.jpg";
import pic19 from "../../assets/industries-images/pic19.jpg";
import pic20 from "../../assets/industries-images/pic20.jpg";
import pic21 from "../../assets/industries-images/pic21.jpg";
import pic22 from "../../assets/industries-images/pic22.jpg";

export default function GalleryTest() {
  const arr = [
    { title: "FIBER ROOFLITE INDUSTRY", img: pic1 },

    { title: "DOOR LAMINATION INDUSTRY", img: pic2 },

    { title: "MANHOLE", img: pic3 },

    { title: "ENGIREED STONE", img: pic4 },
    { title: "FIBER COOLER INDUSTRY", img: pic5 },

    { title: "BUTTON INDUSTRY", img: pic6 },

    { title: "PULTRUSION INDUSTRY", img: pic7 },

    { title: "STATUE INDUSTRY", img: pic8 },

    { title: "COOLING TOWER", img: pic9 },

    { title: "AUTOMOBILE", img: pic10 },

    { title: "CHEMICAL", img: pic11 },

    { title: "TRANSPORT", img: pic12 },

    { title: "Electrical parts manufacturing ", img: pic13 },

    { title: "Filament winding industry", img: pic14 },

    { title: "Electric encapsulation industry", img: pic15 },

    { title: "MARBLE INDUSTRY", img: pic16 },
    // pic17,
    { title: "WINDMILL INDUSTRY", img: pic18 },

    { title: " Building and construction", img: pic19 },

    { title: "Marine", img: pic20 },

    { title: "Grating", img: pic21 },

    { title: "Chemical industry", img: pic22 },
  ];

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="10px" className="gallery-wrapper">
          {arr.map((item, i) => (
            <div key={i} className="gallery-item">
              <div className="image-container">
                <img
                  src={item.img}
                  alt={`Industry ${i + 1}`}
                  className="image"
                />
                <div className="image-text">{item.title}</div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
