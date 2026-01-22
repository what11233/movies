import React from 'react';

function StreamMixHeader({ searchTerm, setSearchTerm }) {
  return (
    <header className="streammix-header">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search across StreamMix..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-icon-btn">🔍</button>
      </div>
      <div className="user-controls">
        <button className="create-btn">➕ Create</button>
        <div className="avatar"></div>
      </div>
    </header>
  );
}

export default StreamMixHeader;
