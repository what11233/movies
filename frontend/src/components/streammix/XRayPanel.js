import React from 'react';

function XRayPanel({ isOpen, onClose, cast = [], trivia = '' }) {
  return (
    <aside className={`xray-panel ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>✕ CLOSE X-RAY</button>
      
      <h3>In This Scene</h3>
      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
        Actors appearing now:
      </p>

      {cast.length > 0 ? (
        cast.map((actor, idx) => (
          <div key={idx} className="xray-cast-item">
            <img
              src={actor.image || 'https://via.placeholder.com/50'}
              alt={actor.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/50?text=Actor';
              }}
            />
            <div>
              <strong>{actor.name}</strong>
              <small>as {actor.character}</small>
            </div>
          </div>
        ))
      ) : (
        <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>
          No cast information available
        </p>
      )}

      <h3>Trivia</h3>
      <p className="xray-trivia">
        {trivia ||
          'Interesting facts about this scene will appear here when available.'}
      </p>
    </aside>
  );
}

export default XRayPanel;
