# MovieFlix - Quick Reference Guide

## 🎬 Two Design Themes Available

### Theme 1: Netflix-Inspired (Default)
- **URL:** http://localhost:3000/
- **Style:** Grid-based cards, top navigation
- **Color:** Red (#e50914) accent
- **Best For:** Traditional browsing

### Theme 2: StreamMix
- **URL:** http://localhost:3000/streammix
- **Style:** Sidebar navigation, horizontal scrolling
- **Color:** Blue (#3ea6ff) accent
- **Best For:** Modern streaming experience

---

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
# App opens at http://localhost:3000
```

### 3. Access Themes
- Netflix: http://localhost:3000/
- StreamMix: http://localhost:3000/streammix

---

## 📁 Project Structure

```
movies/
├── backend/              # Node.js Express API
│   ├── server.js        # Main server file
│   ├── seed.js          # Database seeding
│   └── package.json
│
├── frontend/            # React application
│   ├── public/
│   │   ├── index-netflix.html       # Netflix standalone
│   │   └── index-streammix.html     # StreamMix standalone
│   └── src/
│       ├── App.js                   # Main router
│       ├── components/
│       │   ├── Header.js            # Netflix header
│       │   ├── MovieGrid.js         # Netflix grid
│       │   ├── FilterBar.js         # Filters
│       │   └── streammix/           # StreamMix components
│       │       ├── StreamMixSidebar.js
│       │       ├── StreamMixHeader.js
│       │       ├── StreamMixHero.js
│       │       ├── MovieRow.js
│       │       └── ShortsGrid.js
│       ├── pages/
│       │   ├── Home.js              # Netflix home
│       │   ├── MovieDetail.js       # Movie details
│       │   └── StreamMix.js         # StreamMix page
│       └── styles/
│           ├── *.css                # Netflix styles
│           └── streammix/StreamMix.css  # StreamMix styles
│
└── Documentation
    ├── THEME_DOCUMENTATION.md
    ├── STREAMMIX_INTEGRATION_GUIDE.md
    ├── STREAMMIX_UPDATE.md
    └── README.md
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables in:
- **Netflix:** `/frontend/src/styles/index.css`
- **StreamMix:** `/frontend/src/styles/streammix/StreamMix.css`

```css
:root {
  --primary-red: #e50914;        /* Change Netflix accent */
  --accent-blue: #3ea6ff;        /* Change StreamMix accent */
  --bg-black: #0f0f0f;           /* Change background */
  /* ... more colors ... */
}
```

### Change Layout
- **Netflix:** Edit `/frontend/src/styles/MovieGrid.css`
- **StreamMix:** Edit `/frontend/src/styles/streammix/StreamMix.css`

### Change Content
- Add/modify movies in `/backend/seed.js`
- Update API in `/backend/server.js`

---

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```

### Get Movies
```
GET /api/movies?page=1&limit=20&genre=Action&type=Movie
```

### Get Single Movie
```
GET /api/movies/:id
```

### Get Genres
```
GET /api/genres
```

### Get Types
```
GET /api/types
```

---

## 📦 Database

**Database:** MongoDB
**Movies:** 5,000 pre-seeded

### Movie Schema
```javascript
{
  title: String,
  description: String,
  year: Number,
  rating: Number,
  genre: [String],
  type: String,      // Movie, TV Show, Anime
  duration: Number,  // in minutes
  episodes: Number,  // for TV shows
  poster: String,    // image URL
  backdrop: String,  // image URL
  cast: [String],
  director: String,
  plot: String,
  votes: Number,
  watched: Boolean,
  favorite: Boolean
}
```

---

## 🎯 Features

### Netflix Theme
✅ Movie grid with cards
✅ Filter by genre and type
✅ Search functionality
✅ Movie detail pages
✅ Responsive design
✅ Pagination
✅ Rating display

### StreamMix Theme
✅ Sidebar navigation
✅ Hero billboard section
✅ Horizontal scrolling shelves
✅ YouTube-style shorts
✅ Progress bars (continue watching)
✅ Search bar
✅ User controls
✅ Responsive sidebar collapse

---

## 📱 Responsive Breakpoints

### Both Themes
- **Desktop:** 1024px and up (full layout)
- **Tablet:** 768px - 1023px (compact layout)
- **Mobile:** Below 768px (minimal layout)

---

## 🐛 Troubleshooting

### API Not Working
```bash
# Check backend is running
curl http://localhost:5000/api/health
# Should return: {"status":"ok"}
```

### Movies Not Loading
1. Check MongoDB is running
2. Seed database: `node backend/seed.js`
3. Check browser console for errors
4. Verify API endpoint in frontend (check .env)

### Styling Issues
1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart frontend dev server
3. Check CSS file paths
4. Verify CSS variables are defined

### Components Not Rendering
1. Check browser console for React errors
2. Verify all files are in correct locations
3. Restart dev server
4. Check import paths

---

## 🎬 Standalone HTML Versions

Both themes have standalone HTML files that work without React:

### Netflix HTML
```bash
# Open directly in browser
frontend/public/index-netflix.html
```

### StreamMix HTML
```bash
# Open directly in browser
frontend/public/index-streammix.html
```

No server or build required!

---

## 🚀 Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
# Creates optimized build in 'build' folder
```

### Deploy Options
1. **Vercel** (recommended for React)
2. **Netlify** (excellent for static sites)
3. **AWS/Azure** (for full-stack)
4. **Docker** (included in project)

### Environment Variables
Create `.env` files:

**Backend (.env)**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/movieflix
NODE_ENV=production
```

**Frontend (.env)**
```
REACT_APP_API_URL=https://your-api.com/api
```

---

## 📊 Performance Tips

1. **Images:** Use CDN for image caching
2. **Database:** Add indexes for frequently searched fields
3. **API:** Implement response caching
4. **Frontend:** Use React lazy loading for routes
5. **CSS:** Minify CSS for production

---

## 🔐 Security Considerations

1. Add authentication/authorization
2. Validate all API inputs
3. Add rate limiting to API
4. Use HTTPS in production
5. Sanitize user inputs
6. Add CORS restrictions

---

## 📚 Documentation Files

- `README.md` - Project overview
- `THEME_DOCUMENTATION.md` - Complete theme guide
- `STREAMMIX_INTEGRATION_GUIDE.md` - Integration details
- `STREAMMIX_UPDATE.md` - What's new summary
- `QUICK_REFERENCE.md` - This file

---

## 🎓 Learning Resources

### React
- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Hooks Guide](https://react.dev/reference/react)

### Node.js
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [REST API Guide](https://restfulapi.net)

### CSS
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

## 💡 Future Features

- [ ] User authentication
- [ ] Watchlist functionality
- [ ] Rating/review system
- [ ] Recommendations engine
- [ ] Multi-language support
- [ ] Dark/Light mode toggle
- [ ] Social sharing
- [ ] Email notifications

---

## 📞 Support

For issues:
1. Check documentation files
2. Review console errors (F12)
3. Verify backend is running
4. Check API responses with Postman
5. Test responsive design with DevTools

---

## 📄 License

[Add your license here]

---

**Created:** 2024
**Version:** 2.0 (With StreamMix)
**Status:** ✅ Production Ready
