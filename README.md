# MovieFlix - Movie Streaming Platform

A full-stack movie streaming website with thousands of movies, TV shows, and anime. Built with React, Express, Node.js, and MongoDB.

## 🚀 Features

- **Browse Movies & Shows**: Search and filter through 5,000+ movies, TV shows, and anime
- **Advanced Filtering**: Filter by genre, type (Movie/TV Show/Anime), and search by title
- **Movie Details**: View detailed information including cast, director, plot, ratings, and more
- **Responsive Design**: Beautiful, modern UI optimized for all devices
- **Fast API**: Express backend with MongoDB for efficient querying
- **Full-Text Search**: Powerful search functionality

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

## 🛠️ Installation

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI
# MONGO_URI=mongodb://localhost:27017
# PORT=5000

# Seed the database with 5000 movies
node seed.js

# Start the server
npm start
# or for development with auto-reload
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
movies/
├── backend/
│   ├── server.js          # Express server with API routes
│   ├── seed.js            # Database seeding script (5000 movies)
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS styles
│   │   └── App.js
│   └── package.json
└── README.md
```

## 🎯 API Endpoints

### Movies
- `GET /api/movies` - Get paginated list of movies with filters
  - Query params: `page`, `limit`, `genre`, `type`, `search`
- `GET /api/movies/:id` - Get movie details by ID
- `POST /api/movies` - Add a single movie
- `POST /api/movies/bulk` - Add multiple movies

### Metadata
- `GET /api/genres` - Get all available genres
- `GET /api/types` - Get all available types
- `GET /api/health` - Health check

## 🌟 Usage

1. **Browse Movies**: Visit the home page and see 20 movies per page
2. **Filter**: Use the filter bar to select by type, genre, or search by title
3. **Pagination**: Navigate through pages using the pagination buttons
4. **View Details**: Click any movie to see full details, cast, and ratings
5. **Search**: Use the search bar for full-text search across titles and descriptions

## 🎨 UI Features

- Modern dark theme with vibrant gradients
- Smooth hover animations on movie cards
- Responsive grid layout (adjusts from desktop to mobile)
- Interactive filter bar
- Detailed movie pages with rich information
- Beautiful backdrop images with overlay effects

## 📊 Database

The database is seeded with 5,000 movies including:
- Movies with various genres (Action, Comedy, Drama, Horror, Romance, Sci-Fi, Fantasy, Animation, Thriller, Documentary)
- TV Shows with episode counts
- Anime with full metadata
- Realistic ratings, years, cast, directors, and descriptions

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017
```

For MongoDB Atlas:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/movies_db
```

## 🚀 Deployment

### Backend (Heroku/Render)
```bash
git push heroku main
# or configure on Render dashboard
```

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the build folder to Vercel or Netlify
```

Set `REACT_APP_API_URL` environment variable to your backend URL.

## 🎓 Learning Resources

This project demonstrates:
- React hooks (useState, useEffect)
- React Router for navigation
- Axios for API calls
- Express server with CORS
- MongoDB aggregation and indexing
- RESTful API design
- Responsive web design with CSS Grid
- Modern UI/UX patterns

## 📝 License

MIT

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

## 📞 Support

For issues or questions, please open an issue on the GitHub repository.
