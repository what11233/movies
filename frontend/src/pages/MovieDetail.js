import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/MovieDetail.css';

function MovieDetail({ apiBaseUrl }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to load movie details');
        console.error('Error fetching movie:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id, apiBaseUrl]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="error">Movie not found</div>;

  return (
    <div className="movie-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="detail-backdrop">
        <img src={movie.backdrop} alt={movie.title} />
      </div>

      <div className="detail-container">
        <div className="detail-content">
          <div className="detail-poster">
            <img src={movie.poster} alt={movie.title} />
          </div>

          <div className="detail-info">
            <h1>{movie.title}</h1>

            <div className="meta-info">
              <span className="badge">{movie.type}</span>
              <span className="year">{movie.year}</span>
              <span className="rating">⭐ {movie.rating}/10</span>
              {movie.duration && <span className="duration">{movie.duration} min</span>}
              {movie.episodes && <span className="episodes">{movie.episodes} episodes</span>}
            </div>

            <div className="genres">
              {movie.genre &&
                movie.genre.map((g) => (
                  <span key={g} className="genre-tag">
                    {g}
                  </span>
                ))}
            </div>

            <div className="description">
              <h3>Overview</h3>
              <p>{movie.description || movie.plot}</p>
            </div>

            {movie.director && (
              <div className="director">
                <strong>Director:</strong> {movie.director}
              </div>
            )}

            {movie.cast && movie.cast.length > 0 && (
              <div className="cast">
                <strong>Cast:</strong>
                <div className="cast-list">
                  {movie.cast.map((actor, idx) => (
                    <span key={idx} className="actor">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="stats">
              <div className="stat">
                <span className="stat-value">{movie.votes || 0}</span>
                <span className="stat-label">votes</span>
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-primary">▶ Play Now</button>
              <button className="btn btn-secondary">+ Add to Watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
