import React, { useState } from "react";
import YouTube from "react-youtube";
import "./BackgroundMusic.css";

const BackgroundMusic = ({ videoId }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
    event.target.playVideo();
    event.target.setVolume(30); // default volume
  };

  const toggleMute = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="music-container">
      <YouTube
        videoId={videoId}
        opts={{
          height: "0",
          width: "0",
          playerVars: { autoplay: 1, loop: 1, playlist: videoId }
        }}
        onReady={onReady}
      />
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
