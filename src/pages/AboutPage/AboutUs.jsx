import React from "react";
import Hero from "./Hero";
import Values from "./Values";
import Achievements from "./Achievements";
import Navigating from "./Navigating";
import ValiedClients from "./ValiedClients";
import Footer from "../../components/Footer";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div className="w-screen pb-4">
      <div className="max-container">
        <Hero />
        <Values />
        <Achievements />
        <Navigating />
        <ValiedClients />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;