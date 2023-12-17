import React from "react";
import "./Unsaturated.css";
import MultiCrousel from "../multicrousel/MultiCrousel";
export default function Unsaturated() {
  return (
    <div className="unsaturated-wrapper">
      <div className="featured">
        <div className="part-1">
          <h1>1971</h1>
          <p>Year Established</p>
        </div>
        <div className="part-2">
          <div className="part2-01">
            <div
              className="part-1"
              style={{
                backgroundColor: "#fff",
                color: "red",
              }}
            >
              <h1>50+</h1>
              <p>Resins Grades</p>
            </div>
          </div>

          <div className="part2-01 ">
            <div
              className="part-1"
              style={{ backgroundColor: "#fff", color: "red" }}
            >
              <h1>25k MT</h1>
              <p>Production Capacity</p>
            </div>
          </div>
          <div className="part2-01">
            <div
              className="part-1"
              style={{
                backgroundColor: "#fff",
                color: "red",
                borderTopRightRadius: "130px",
                borderBottomRightRadius: "130px",
              }}
            >
              <h1>10+</h1>
              <p>Industries Reserved</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-content-container">
        <div className="text-content-heading">
          <span style={{ borderBottom: "3px solid #ED1D2B" }}>Unsaturated</span>
          &nbsp;
          <span>Polyster Resins</span>
        </div>
        <div className="text-content-saturation">
          POLYESTER RESINS, are a group of thermosetting synthetic resins, which
          are polycondensation products of dicarboxylic acids with dihydroxy
          alcohol’s, used along with Fibre Glass Mats for production of FRP
          Components which are durable and outstanding in Mechanical, Electrical
          and Chemical properties. <br /> <br />​ There are so many varied uses
          of POLYESTER RESINS and finished FRP Products are used in Automobiles,
          Encapsulation of electrical equipment, Protective coatings, Piping,
          Roof Sheeting, Bathtubs, Boat Hulls, Chemical Industries and
          Electrical Industries.
        </div>
      </div>
      <MultiCrousel />
    </div>
  );
}
