import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutPage/AboutUs";
import Properites from "./pages/properite/Properites";
import Services from "./pages/service/Services";

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
            <Route path="/properites" element={<Properites />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
