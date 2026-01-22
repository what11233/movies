import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StreamMixSidebar from '../components/streammix/StreamMixSidebar';
import StreamMixHeader from '../components/streammix/StreamMixHeader';
import XRayPanel from '../components/streammix/XRayPanel';
import MiniPlayer from '../components/streammix/MiniPlayer';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function StreamMix() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [xrayOpen, setXrayOpen] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/movies?page=1&limit=12`);
        const moviesData = response.data.data;
        setMovies(moviesData);

        if (moviesData.length > 0) {
          setFeaturedMovie(moviesData[0]);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div style={{ color: 'white', padding: '40px' }}>Loading...</div>;
  }

  const sampleCast = [
    {
      name: 'Christian Bale',
      character: 'Bruce Wayne',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    },
    {
      name: 'Heath Ledger',
      character: 'The Joker',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    },
  ];

  const sampleTrivia =
    'The hospital explosion scene was delayed because of a technical glitch, leading to the famous improvised reaction.';

  return (
    <div className="streammix">
      <StreamMixSidebar onXrayClick={() => setXrayOpen(!xrayOpen)} />
      <XRayPanel
        isOpen={xrayOpen}
        onClose={() => setXrayOpen(false)}
        cast={sampleCast}
        trivia={sampleTrivia}
      />
      <MiniPlayer
        isOpen={playerOpen}
        onClose={() => setPlayerOpen(false)}
        title={featuredMovie?.title || 'Big Buck Bunny'}
      />

      <div className="streammix-container">
        <StreamMixHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Hero Section */}
        {featuredMovie && (
          <div
            className="hero-billboard"
            style={{
              backgroundImage: `url(${featuredMovie.backdrop || featuredMovie.poster})`,
              height: '60vh',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div className="hero-info">
              <h1>{featuredMovie.title}</h1>
              <p>{featuredMovie.description}</p>
              <div className="hero-buttons">
                <button
                  className="hero-btn hero-btn-primary"
                  onClick={() => setPlayerOpen(!playerOpen)}
                >
                  ▶ Watch Now
                </button>
                <button className="hero-btn hero-btn-secondary">
                  + My List
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Trending Section */}
        <div className="row-container">
          <h2 className="row-title">Trending on StreamMix</h2>
          <div className="card-stack">
            {movies.slice(0, 6).map((movie, index) => (
              <div key={index} className="item-card">
                <img
                  src={movie.poster || 'https://via.placeholder.com/280x157'}
                  alt={movie.title}
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/280x157?text=No+Image';
                  }}
                />
                <div className="overlay-btns">
                  <button
                    className="circle-btn"
                    onClick={() => setPlayerOpen(true)}
                  >
                    ▶
                  </button>
                  <button className="circle-btn">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Movies Section */}
        <div className="row-container">
          <h2 className="row-title">Popular on StreamMix</h2>
          <div className="card-stack">
            {movies.slice(6, 12).map((movie, index) => (
              <div key={index} className="item-card">
                <img
                  src={movie.poster || 'https://via.placeholder.com/280x157'}
                  alt={movie.title}
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/280x157?text=No+Image';
                  }}
                />
                <div className="overlay-btns">
                  <button
                    className="circle-btn"
                    onClick={() => setPlayerOpen(true)}
                  >
                    ▶
                  </button>
                  <button className="circle-btn">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StreamMix;
