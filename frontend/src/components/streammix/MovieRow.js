import React from 'react';

function MovieRow({ title, link, movies }) {
  return (
    <section className="content-section">
      <div className="shelf-title">
        {title}
        {link && <a href="#" className="shelf-title-link">{link}</a>}
      </div>
      <div className="movie-row">
        {movies.map((movie, idx) => (
          <div key={idx} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="card-meta">
              <strong>{movie.title}</strong>
              {movie.subtitle && (
                <p>{movie.subtitle}</p>
              )}
              {movie.progress !== undefined && (
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${movie.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
