import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import IndustriesServing from "../components/industriesserving/IndustriesServing";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <IndustriesServing />
      <Footer />
    </>
  );
}
