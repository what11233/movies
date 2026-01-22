import React, { useState } from 'react';
import '../../styles/streammix/StreamMix.css';

function StreamMixSidebar({ onXrayClick }) {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'shows', icon: '📺', label: 'TV Shows' },
    { id: 'movies', icon: '🎬', label: 'Movies' },
    { id: 'live', icon: '🔴', label: 'Live' },
  ];

  const libraryItems = [
    { id: 'originals', icon: '✨', label: 'Originals' },
    { id: 'watchlater', icon: '⏱️', label: 'Watch Later' },
    { id: 'store', icon: '🛍️', label: 'Store' },
  ];

  const handleXray = () => {
    if (onXrayClick) {
      onXrayClick();
    }
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <span>StreamMix</span>
      </div>

      <div className="nav-section">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item.id);
            }}
          >
            <span className="nav-item-icon">{item.icon}</span>
            <span className="nav-item-text">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="nav-section">
        <div className="nav-section-title">Library</div>
        {libraryItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className="nav-item"
            onClick={(e) => e.preventDefault()}
          >
            <span className="nav-item-icon">{item.icon}</span>
            <span className="nav-item-text">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="nav-section">
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            handleXray();
          }}
        >
          <span className="nav-item-icon">🕵️</span>
          <span className="nav-item-text">X-Ray Mode</span>
        </a>
        <a href="#" className="nav-item" onClick={(e) => e.preventDefault()}>
          <span className="nav-item-icon">⚙️</span>
          <span className="nav-item-text">Settings</span>
        </a>
      </div>
    </nav>
  );
}

export default StreamMixSidebar;

export default StreamMixSidebar;
