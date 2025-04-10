import React from "react";

import Land from "./Land";
import FeaturePropites from "./FeaturePropites";
import Testimonilales from "./Testimonilales";
import FAQ from "./FAQ";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="w-screen pb-4">
      <div className="max-container">
        <Land />
        <FeaturePropites />
        <Testimonilales />
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
