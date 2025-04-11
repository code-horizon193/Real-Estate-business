import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutPage/AboutUs";
import Contact from "./pages/Contact";
import Properites from "./pages/Properites";
import Services from "./pages/Services";

import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="w-screen relative min-h-dvh bg-black">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properites" element={<Properites />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
