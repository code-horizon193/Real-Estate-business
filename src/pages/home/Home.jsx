import React from "react";

import Land from "./Land";
// import FeaturePropites from "./FeaturePropites";
import Testimonilales from "./Testimonilales";
import FAQ from "./FAQ";
import Footer from "../../components/Footer";
import FeaturePropites from "../../components/FeaturePropites";

const Home = () => {
  return (
    <div className="w-screen pb-4">
      <div className="max-container">
        <Land />
        <FeaturePropites
          sectionTitle="Featured Properties"
          sectionSubTitle='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
          sectionId="view-all-properties"
          btnContent="View All Properties"
        />

        <Testimonilales />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
