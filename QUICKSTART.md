# Quick Start Guide

## Option 1: Local Development (Recommended for Development)

### Prerequisites
- Node.js 14+
- MongoDB running locally or MongoDB Atlas

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm run install-all
   ```

2. **Setup Backend Environment**
   ```bash
   cp backend/.env.example backend/.env
   
   # Edit backend/.env with your MongoDB URI
   # For local MongoDB:
   # MONGO_URI=mongodb://localhost:27017
   # PORT=5000
   ```

3. **Seed the Database** (Terminal 1)
   ```bash
   npm run seed
   # This creates 5,000 movies in your database
   ```

4. **Start Backend** (Terminal 1)
   ```bash
   npm run dev-backend
   # Backend runs on http://localhost:5000
   ```

5. **Start Frontend** (Terminal 2)
   ```bash
   npm run start-frontend
   # Frontend runs on http://localhost:3000
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## Option 2: Docker (Recommended for Production)

### Prerequisites
- Docker
- Docker Compose

### Setup Steps

1. **Start All Services**
   ```bash
   docker-compose up --build
   ```

2. **Seed the Database** (New Terminal)
   ```bash
   docker-compose exec backend node seed.js
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - MongoDB: localhost:27017

### Stopping Services
```bash
docker-compose down

# To remove volumes too:
docker-compose down -v
```

---

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or update MONGO_URI in .env
- For MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Find process using port 3000
lsof -i :3000

# Kill process (replace PID)
kill -9 <PID>
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
cd backend && rm -rf node_modules && npm install
cd ../frontend && rm -rf node_modules && npm install
```

---

## Testing the API

### Check Backend Health
```bash
curl http://localhost:5000/api/health
```

### Get Movies
```bash
curl http://localhost:5000/api/movies?page=1&limit=10
```

### Search Movies
```bash
curl "http://localhost:5000/api/movies?search=action&type=Movie"
```

### Get Movie by ID
```bash
curl http://localhost:5000/api/movies/[MOVIE_ID]
```

### Get Genres
```bash
curl http://localhost:5000/api/genres
```

### Get Types
```bash
curl http://localhost:5000/api/types
```

---

## Features to Try

1. **Browse** - Navigate through pages of movies using pagination
2. **Filter** - Filter by movie type (Movie, TV Show, Anime)
3. **Genre Filter** - Filter by genre (Action, Comedy, Drama, etc.)
4. **Search** - Search for movies by title or keywords
5. **View Details** - Click any movie to see full details with cast and ratings

---

## Next Steps

- Deploy backend to Heroku or Render
- Deploy frontend to Vercel or Netlify
- Add user authentication
- Add watchlist/favorites functionality
- Implement reviews and ratings
- Add streaming player integration

Enjoy! 🎬
