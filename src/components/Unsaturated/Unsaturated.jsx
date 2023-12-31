import React, { useState, useEffect } from "react";
import "./Unsaturated.css";
import MultiCrousel from "../multicrousel/MultiCrousel";

export default function Unsaturated() {
  const [establishedCount, setEstablishedCount] = useState(0);
  const [resinsGradesCount, setResinsGradesCount] = useState(0);
  const [productionCapacityCount, setProductionCapacityCount] = useState(0);
  const [industriesReservedCount, setIndustriesReservedCount] = useState(0);

  useEffect(() => {
    const establishInterval = setInterval(() => {
      setEstablishedCount((prevCount) => prevCount + 50);
    }, 50);

    const gradesInterval = setInterval(() => {
      setResinsGradesCount((prevCount) => prevCount + 1);
    }, 50);

    const productionInterval = setInterval(() => {
      setProductionCapacityCount((prevCount) => prevCount + 1);
    }, 50);

    const reservedInterval = setInterval(() => {
      setIndustriesReservedCount((prevCount) => prevCount + 1);
    }, 50);

    // Clear the intervals after the counts reach their final values
    if (establishedCount >= 2004) {
      setEstablishedCount(2004);
      clearInterval(establishInterval);
    }
    if (resinsGradesCount === 50 || resinsGradesCount === "50+") {
      setResinsGradesCount("50+");
      clearInterval(gradesInterval);
    }
    if (productionCapacityCount == 25 || productionCapacityCount == "25K MT") {
      setProductionCapacityCount("25K MT");
      clearInterval(productionInterval);
    }
    if (industriesReservedCount === 20 || industriesReservedCount === "20+") {
      setIndustriesReservedCount("20+");
      clearInterval(reservedInterval);
    }

    return () => {
      clearInterval(establishInterval);
      clearInterval(gradesInterval);
      clearInterval(productionInterval);
      clearInterval(reservedInterval);
    };
  }, [
    establishedCount,
    resinsGradesCount,
    productionCapacityCount,
    industriesReservedCount,
  ]);

  return (
    <div className="unsaturated-wrapper">
      <div className="featured">
        <div className="part-1">
          <h1>{establishedCount}</h1>
          <p>Year Established</p>
        </div>
        <div className="part-2">
          <div className="part2-01">
            <div
              className="part-1"
              style={{ backgroundColor: "#fff", color: "red" }}
            >
              <h1>{resinsGradesCount}</h1>
              <p>Resins Grades</p>
            </div>
          </div>

          <div className="part2-01 ">
            <div
              className="part-1"
              style={{ borderRadius: "0", padding: "0 10px" }}
            >
              <h1>{productionCapacityCount}</h1>
              <p>100% customer satisfaction</p>
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
              <h1>{industriesReservedCount}</h1>
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
