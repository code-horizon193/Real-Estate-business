import React from "react";
import ContactFields from "./ContactFields";
import FeaturePropites from "../../components/FeaturePropites";
import LandPage from "./LandPage";
import Footer from '../../components/Footer';

const Properites = () => {
  return (
    <div>
      <LandPage />
      <div className="max-container mt-7">
        <FeaturePropites
          sectionTitle="Discover a World of Possibilities"
          sectionSubTitle="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        />
        <ContactFields />
      </div>
      <Footer />
    </div>
  );
};

export default Properites;