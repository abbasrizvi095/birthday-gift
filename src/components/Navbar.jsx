// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar subtle-navbar">
      <div className="navbar-logo subtle-logo">
        <Link to="/">
          <img src="/gallery/IMG_5399.webp" alt="Ana's Birthday" className="navbar-logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link subtle-link">Home</Link></li>
        <li>
          <Link
            to={isLoggedIn ? "/personal-message" : "#"}
            className={`nav-link subtle-link ${!isLoggedIn ? "disabled_link" : ""}`}
            onClick={(e) => { if (!isLoggedIn) e.preventDefault(); }}
          >
            Personal Message
          </Link>
        </li>
        <li><Link to="/gallery" className="nav-link subtle-link">Gallery</Link></li>
        <li><Link to="/know-ana" className="nav-link subtle-link">Know Ana</Link></li>
        <li><Link to="/shop" className="nav-link subtle-link">Shop</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
