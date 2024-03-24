import './Autop.css'

import React, { useState } from 'react';

const BackgroundMusic: React.FC = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const playBackgroundMusic = () => {
    setIsMusicPlaying(true);
  };

  return (
    <>
      {!isMusicPlaying && (
        <button onClick={playBackgroundMusic}>Music</button>
      )}
      {isMusicPlaying && (
        <audio src="/tadhana.mp3" autoPlay loop />
      )}
    </>
  );
};

export default BackgroundMusic;
