import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const images = [
  "/background.jpg",
  "/cake.gif",
  "/images.jpeg",
  "/cake.gif",
  "/cake.gif",
  "/carousel.avif",
  "/cake.gif",
   "/background.jpg",
  "/cake.gif",
  "/images.jpeg",
  "/carousel.avif",
   "/background.jpg",
  "/cake.gif",
  "/images.jpeg",
  "/carousel.avif",
   "/background.jpg",
  "/cake.gif",
  "/images.jpeg",
  "/carousel.avif",
   "/background.jpg",
  "/cake.gif",
  "/images.jpeg",
  "/carousel.avif",
   "/background.jpg",
  "/cake.gif",
  "/images.jpeg",
  "/carousel.avif"  // Add more image paths here
];

const BATCH_SIZE = 4;

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(BATCH_SIZE);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisibleImages(prev => Math.min(prev + BATCH_SIZE, images.length));
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [visibleImages]);

  return (
    <div className="gallery-container">
      {images.slice(0, visibleImages).map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery ${index + 1}`}
          className="gallery-image"
          loading="lazy"
        />
      ))}
      {visibleImages < images.length && (
        <div ref={loaderRef} style={{ height: "50px", width: "100%" }} />
      )}
    </div>
  );
};

export default Gallery;
