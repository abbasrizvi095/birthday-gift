import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PersonalMessage from "../components/PersonalMessage";

const PersonalPage = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <main>
        <PersonalMessage />
      </main>
      <Footer />
    </>
  );
};

export default PersonalPage;