import React from 'react';

function ShortsGrid({ shorts }) {
  return (
    <section className="content-section">
      <div className="shelf-title">
        Shorts <span className="shelf-title-link">See all</span>
      </div>
      <div className="shorts-grid">
        {shorts.map((short, idx) => (
          <div key={idx} className="short-item">
            <img src={short.image} alt={short.title} />
            <div className="short-overlay">
              <div>{short.title}</div>
              <div style={{ fontSize: '0.7rem', marginTop: '4px' }}>
                {short.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShortsGrid;
