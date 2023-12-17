import { React, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Welcome from "../components/welcome/Welcome";
import Unsaturated from "../components/Unsaturated/Unsaturated";
import Timeline from "../components/Timeline/Timeline";
import PopularProducts from "../components/popularproducts/PopularProducts";
import Why from "../components/why/Why";
import Industries from "../components/Industries/Industries";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Unsaturated />
      <Timeline />
      <PopularProducts />
      <Industries />
      <Why />

      <Footer />
    </>
  );
}
