// src/components/ImageCarousel.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const navigate = useNavigate();

  const handleCelebrateClick = () => {
    navigate("/gallery");
  };
  return (
    <div className="hero-carousel">
      <img
        className="carousel-image"
        src="/gallery/carousel.avif"
        alt="Birthday Slide"
      />
      <div className="carousel-text">
        <h1>Shine On</h1>
        <p>Celebrating Ana, the light in our lives ✨</p>
        <button className="carousel-btn" onClick={handleCelebrateClick}>View more</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
