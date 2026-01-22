import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import MovieGrid from '../components/MovieGrid';
import '../styles/Home.css';

function Home({ apiBaseUrl }) {
  const [filters, setFilters] = useState({
    genre: '',
    type: '',
    search: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to MovieFlix</h1>
          <p>Discover thousands of movies, TV shows, and anime</p>
        </div>
      </div>

      <div className="container">
        <FilterBar apiBaseUrl={apiBaseUrl} onFilterChange={handleFilterChange} />
        <MovieGrid
          apiBaseUrl={apiBaseUrl}
          genre={filters.genre}
          type={filters.type}
          search={filters.search}
        />
      </div>
    </div>
  );
}

export default Home;
