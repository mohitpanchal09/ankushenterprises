import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCrousel.css";
import React from "react";

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
        <div className="testimonial">
          <div className="inner-testimonial"></div>
        </div>

        <div className="testimonial">
          <div className="inner-testimonial"></div>
        </div>

        <div className="testimonial">
          <div className="inner-testimonial"></div>
        </div>

        <div className="inner-testimonial">
          <div className="inner-testimonial"></div>
        </div>
        <div className="testimonial">
          <div className="inner-testimonial"></div>
        </div>

        <div className="testimonial">
          <div className="inner-testimonial"></div>
        </div>

        <div className="testimonial">
          <div className="inner-testimonial"></div>
        </div>
      </Carousel>
    </div>
  );
}
