// src/components/LoginOverlay.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginOverlay.css";

const LoginOverlay = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const validNames = ["ana", "abbas"];
    const validNicknames = ["maddy", "liliput", "chinku", "rajdulara", "mutko"];

    if (
      validNames.includes(name.trim().toLowerCase()) &&
      validNicknames.includes(nickname.trim().toLowerCase())
    ) {
      setIsLoggedIn(true); // ✅ matches the App.jsx prop
      navigate("/");
    } else {
      alert("Oops! That doesn't seem right. Try again?");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <h2>Hey there! 💖</h2>
        <p>
          This is a special corner made just for Ana. If that’s you, enter your
          name and sweet nickname to unlock the surprise!
        </p>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button onClick={handleLogin}>Let me in 🎉</button>
      </div>
    </div>
  );
};

export default LoginOverlay;
