// src/components/Shop.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Shop.css";

const Shop = () => {
  const [links, setLinks] = useState([""]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // new

  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleChangeLink = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setLoading(true); // start spinner

    const generateEmailBody = (links) => {
      if (links.length === 0) return "No items added yet!";
      const linkLines = links.map((link, i) => `${i + 1}. ${link}`).join("\n");
      return `
Hi love! 💕

Here’s my little wishlist of things I’d love to have — just a few tiny treasures that caught my eye 💫  
If you find the time (and the mood), maybe you could help make them mine? 🛍️

Links to the goodies:

${linkLines}

No pressure, just a soft nudge from your favorite personal shopper 😉  
Whenever you're ready, I trust your magic 💖

All my love,  
– Your forever shopping buddy 💝
      `;
    };

    emailjs
      .send(
        "service_e93dbcr",
        "template_p9nesfp",
        {
          subject: "Things to Buy Next 💖",
          message: generateEmailBody(links.filter((link) => link.trim() !== "")),
          to_email: "yourname@gmail.com",
        },
        "bn64ubck-ytglkopH"
      )
      .then(() => {
        setSuccess(true);
        setLinks([""]);
      })
      .catch((error) => {
        console.error("Email send failed:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false); // stop spinner
      });
  };

  return (
    <div className="shop-page">
      <h2>🛍️ Your Personal Shopper</h2>
      <p>Add links to anything you'd love to receive. We'll keep track of your wishlist ❤️</p>

      {loading ? (
        <div className="spinner-container">
          <div className="spinner" />
          <p>Sending your wishlist...</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {links.map((link, index) => (
              <input
                key={index}
                type="input"
                placeholder={`Link or description of item you want to buy`}
                value={link}
                onChange={(e) => handleChangeLink(index, e.target.value)}
                required
              />
            ))}

            <button type="button" className="add-link-btn" onClick={handleAddLink}>
              ➕ Add Another Item
            </button>

            <button type="submit" className="submit-btn">
              📩 Send Wishlist
            </button>
          </form>

          {success && <p className="success-msg">✅ Email sent successfully!</p>}
        </>
      )}
    </div>
  );
};

export default Shop;
