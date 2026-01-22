import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        🎬 Movie Hub
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <a href="#movies" className="nav-link">Browse</a>
        <a href="#about" className="nav-link">About</a>
      </nav>
      <div className="search-container">
        <input 
          type="text" 
          id="movieSearch" 
          placeholder="Search movies..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </header>
  );
}

export default Header;
