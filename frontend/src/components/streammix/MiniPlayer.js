import React, { useRef } from 'react';

function MiniPlayer({ isOpen, onClose, videoSrc = '', title = 'Playing' }) {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  React.useEffect(() => {
    if (isOpen && videoRef.current) {
      handlePlay();
    }
  }, [isOpen]);

  return (
    <div className={`mini-player ${isOpen ? 'open' : ''}`}>
      <video ref={videoRef} controls>
        <source
          src={
            videoSrc ||
            'https://www.w3schools.com/html/mov_bbb.mp4'
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="mini-player-info">
        <span>
          <strong>Playing:</strong> {title}
        </span>
        <button onClick={handleClose}>✕</button>
      </div>
    </div>
  );
}

export default MiniPlayer;
