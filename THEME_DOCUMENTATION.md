# MovieFlix - Theme Documentation

MovieFlix now supports two distinct design themes that provide different user experiences for browsing and streaming content.

## Available Themes

### 1. Netflix-Inspired Theme (Default)
**Route:** `/`

Modern Netflix-style interface with:
- Grid-based movie card layout
- Top navigation header
- Modern filter system with genre and type selection
- Rich movie detail pages
- Responsive design with full mobile support
- Red accent color (#e50914) with dark theme
- Smooth animations and transitions

**Files:**
- `/frontend/src/pages/Home.js` - Main landing page
- `/frontend/src/components/Header.js` - Top navigation
- `/frontend/src/components/MovieGrid.js` - Movie card grid
- `/frontend/src/components/FilterBar.js` - Filter controls
- `/frontend/src/styles/index.css` - Global styles
- `/frontend/src/styles/Home.css` - Home page styles
- `/frontend/src/styles/MovieGrid.css` - Grid component styles
- `/frontend/public/index-netflix.html` - Standalone HTML version

### 2. StreamMix Theme
**Route:** `/streammix`

YouTube-Spotify hybrid interface featuring:
- Persistent sidebar navigation with main menu and library sections
- Sticky header with search bar and user controls
- Hero billboard section with featured content
- Horizontal scrolling movie shelves with progress indicators
- YouTube-style shorts grid with 9:16 aspect ratio
- Blue accent color (#3ea6ff) with dark theme
- Responsive sidebar collapse on smaller screens

**Files:**
- `/frontend/src/pages/StreamMix.js` - Main StreamMix page
- `/frontend/src/components/streammix/StreamMixSidebar.js` - Navigation sidebar
- `/frontend/src/components/streammix/StreamMixHeader.js` - Header with search
- `/frontend/src/components/streammix/StreamMixHero.js` - Hero billboard
- `/frontend/src/components/streammix/MovieRow.js` - Horizontal scrolling rows
- `/frontend/src/components/streammix/ShortsGrid.js` - Shorts grid
- `/frontend/src/styles/streammix/StreamMix.css` - All StreamMix styling
- `/frontend/public/index-streammix.html` - Standalone HTML version

## Navigation Between Themes

Users can navigate between themes using the following routes:
- Netflix theme: http://localhost:3000/
- StreamMix theme: http://localhost:3000/streammix

## Theme Architecture

Both themes share:
- Same backend API (Node.js Express)
- Same database (MongoDB with 5,000 movies)
- CSS variable system for consistent colors
- Modular component structure
- Responsive breakpoints

### CSS Variables (Shared Across Themes)
```css
--primary-red: #e50914
--bg-black: #0f0f0f
--sidebar-bg: #121212
--card-bg: #1e1e1e
--text-white: #ffffff
--text-gray: #aaaaaa
--accent-blue: #3ea6ff
```

### Responsive Breakpoints (Both Themes)
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## Standalone HTML Versions

Each theme has a self-contained HTML file that can be opened directly in a browser without running the React application:

1. **Netflix-Inspired HTML**
   - Location: `/frontend/public/index-netflix.html`
   - Open directly in browser
   - Pre-populated with sample data
   - No build required

2. **StreamMix HTML**
   - Location: `/frontend/public/index-streammix.html`
   - Open directly in browser
   - Pre-populated with sample data
   - No build required

## API Integration

Both themes connect to the same REST API with the following endpoints:

- `GET /api/movies` - Get paginated movies with filters
- `GET /api/movies/:id` - Get single movie details
- `GET /api/genres` - Get all available genres
- `GET /api/types` - Get content types (Movie, TV Show, Anime)
- `GET /api/health` - API health check

### Example API Response (Movie)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Inception",
  "description": "A thief who steals corporate secrets...",
  "year": 2010,
  "rating": 8.8,
  "genre": ["Action", "Sci-Fi", "Thriller"],
  "type": "Movie",
  "duration": 148,
  "episodes": null,
  "poster": "https://...",
  "backdrop": "https://...",
  "cast": ["Leonardo DiCaprio", "Marion Cotillard"],
  "director": "Christopher Nolan",
  "plot": "Detailed plot...",
  "votes": 2547800,
  "watched": false,
  "favorite": false
}
```

## Development

To develop either theme:

1. **Start Backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. Visit http://localhost:3000/ for Netflix theme or http://localhost:3000/streammix for StreamMix theme

## Future Enhancements

Potential improvements for both themes:
- [ ] Theme toggle/switcher in UI
- [ ] User preference persistence
- [ ] Dark/Light mode toggle
- [ ] Custom theme builder
- [ ] Advanced filter options
- [ ] User watchlist functionality
- [ ] Rating and review system
- [ ] Social sharing features
- [ ] Recommendations engine
- [ ] Multi-language support

## File Structure Overview

```
/workspaces/movies/
├── backend/
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── public/
    │   ├── index-netflix.html
    │   └── index-streammix.html
    ├── src/
    │   ├── components/
    │   │   ├── Header.js
    │   │   ├── MovieGrid.js
    │   │   ├── FilterBar.js
    │   │   └── streammix/
    │   │       ├── StreamMixSidebar.js
    │   │       ├── StreamMixHeader.js
    │   │       ├── StreamMixHero.js
    │   │       ├── MovieRow.js
    │   │       └── ShortsGrid.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── MovieDetail.js
    │   │   └── StreamMix.js
    │   ├── styles/
    │   │   ├── index.css
    │   │   ├── Home.css
    │   │   ├── MovieGrid.css
    │   │   ├── FilterBar.css
    │   │   ├── MovieDetail.css
    │   │   └── streammix/
    │   │       └── StreamMix.css
    │   └── App.js
    └── package.json
```

## Notes

- Both themes are production-ready
- All CSS is vanilla (no frameworks required)
- Fully responsive across all device sizes
- Accessible markup and semantic HTML
- No external animation libraries (pure CSS animations)
- Cross-browser compatible
