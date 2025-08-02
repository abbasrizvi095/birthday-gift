import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import PersonalMessage from "../components/PersonalMessage";
import LoginOverlay from "../components/LoginOverlay";
import Confetti from "react-confetti";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import KnowAna from "../components/KnowAna";
import BackgroundMusic from "../components/BackgroundMusic";
import Shop from "../components/Shop";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const today = new Date();
  const isBirthday = today >= new Date("2025-08-06"); // Ana's birthday

  // Resize listener for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} />}
      {isLoggedIn && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <Routes>
        <Route path="/login" element={<LoginOverlay setIsLoggedIn={handleLogin} />} />
        <Route path="/gallery" element={
          isLoggedIn ? (
            <>
              <BackgroundMusic videoId="kPa7bsKwL-c" />
              <Gallery />
            </>
          ) : (
            <Navigate to="/login" replace />
          )
        } />
        <Route path="/personal-message" element={
          isLoggedIn ? (
            <>
              <BackgroundMusic videoId="-BjZmE2gtdo" />
              <PersonalMessage />
            </>
          ) : (
            <Navigate to="/login" replace />
          )
        } />
        <Route path="/know-ana" element={
          isLoggedIn ? (
            <>
              <BackgroundMusic videoId="JgDNFQ2RaLQ" />
              <KnowAna />
            </>
          ) : (
            <Navigate to="/login" replace />
            
          )
        } />
        <Route path="/shop" element={
          isLoggedIn ? <Shop /> : <Navigate to="/login" replace />}
        />
        <Route path="/" element={
          isLoggedIn ? (
            <>
              {isBirthday && (
                <div className="birthday-banner">
                  🎉 Happy Birthday Ana! 🎂<br />
                  May your day be filled with love, laughter, and all the things that make you smile 💖
                </div>
              )}
              <Home />
            </>
          ) : (
            <Navigate to="/login" replace />
          )
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
