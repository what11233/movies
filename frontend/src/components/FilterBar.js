import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FilterBar.css';

function FilterBar({ apiBaseUrl, onFilterChange }) {
  const [genres, setGenres] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [genresRes, typesRes] = await Promise.all([
          axios.get(`${apiBaseUrl}/genres`),
          axios.get(`${apiBaseUrl}/types`),
        ]);
        setGenres(genresRes.data);
        setTypes(typesRes.data);
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    fetchFilters();
  }, [apiBaseUrl]);

  const handleFilterChange = () => {
    onFilterChange({
      genre: selectedGenre,
      type: selectedType,
      search: searchTerm,
    });
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedGenre, selectedType, searchTerm]);

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <input
          type="text"
          placeholder="Search movies, shows, anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <label>Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="filter-select"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Genre:</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="filter-select"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
