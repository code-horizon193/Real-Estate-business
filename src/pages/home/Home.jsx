import React from "react";

import Land from "./Land";
import FeaturePropites from "./FeaturePropites";
import Testimonilales from "./Testimonilales";

const Home = () => {
  return (
    <div className="w-screen pb-4">
      <div className="max-container">
        <Land />
        <FeaturePropites />
        <Testimonilales />
      </div>
    </div>
  );
};

export default Home;
