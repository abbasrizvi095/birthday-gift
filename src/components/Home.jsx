// src/components/Home.jsx
import React from "react";
import "./Home.css"; // Make sure this CSS file exists
import ImageCarousel from "./ImageCarousel";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-background">
      <main>
        <ImageCarousel />
        <AboutSection />
      </main>
    </div>
  );
};

export default Home;
