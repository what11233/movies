import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/MovieGrid.css';

function MovieGrid({ apiBaseUrl, genre, type, search }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [genre, type, search]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {
          page,
          limit: 20,
        };
        if (genre) params.genre = genre;
        if (type) params.type = type;
        if (search) params.search = search;

        const response = await axios.get(`${apiBaseUrl}/movies`, { params });
        setMovies(response.data.data);
        setTotal(response.data.total);
      } catch (err) {
        setError('Failed to load movies');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, genre, type, search, apiBaseUrl]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="movie-grid-container">
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link key={movie._id} to={`/movie/${movie._id}`} className="movie-card">
            <div className="movie-poster">
              <img src={movie.poster} alt={movie.title} />
              <div className="movie-overlay">
                <div className="movie-info-overlay">
                  <h3>{movie.title}</h3>
                  <p className="year">{movie.year}</p>
                  <p className="rating">⭐ {movie.rating}/10</p>
                  <p className="type">{movie.type}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {movies.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="pagination-btn"
          >
            ← Previous
          </button>
          <span className="page-info">
            Page {page} of {Math.ceil(total / 20)}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= Math.ceil(total / 20)}
            className="pagination-btn"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
