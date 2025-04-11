import React from "react";
import Hero from "./Hero";
import Values from "./Values";
import Achievements from "./Achievements";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <div className="w-screen pb-4">
      <div className="max-container">
        <Hero />
        <Values />
        <Achievements />
      </div>
    </div>
  );
};

export default AboutUs;