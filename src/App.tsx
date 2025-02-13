import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import CoffeeTypes from "./components/CoffeeTypes";
import ContactUs from "./components/ContactUs";
import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/coffee-types" element={<CoffeeTypes />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
