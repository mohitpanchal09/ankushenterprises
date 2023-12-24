import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCrousel.css";
import React from "react";
import pic1 from "../../assets//circle-images/pic1.jpg";
import pic2 from "../../assets//circle-images/pic2.jpg";
import pic3 from "../../assets//circle-images/pic3.jpg";
import pic4 from "../../assets//circle-images/pic4.jpg";
import pic5 from "../../assets//circle-images/pic5.jpg";
import pic6 from "../../assets//circle-images/pic6.jpg";
import pic7 from "../../assets//circle-images/pic7.jpg";
import pic8 from "../../assets//circle-images/pic8.jpg";
import pic9 from "../../assets//circle-images/pic9.jpg";
const circleImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];
export default function MultiCrousel() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    desktop: { breakpoint: { max: 3100, min: 1000 }, items: 6 },
    tablet: { breakpoint: { max: 1024, min: 708 }, items: 3 },
    mobile: { breakpoint: { max: 708, min: 0 }, items: 2 },
  };

  return (
    <div style={{ padding: "20px" }}>
      <Carousel responsive={responsive} itemClass="">
        {circleImages.map((item) => {
          return (
            <div className="testimonial">
              <div className="inner-testimonial">
                <img src={item} alt="" className="inner-testimonial" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
