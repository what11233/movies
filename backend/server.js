const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = 'movies_db';
let db;

async function connectDB() {
  try {
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    await client.connect();
    db = client.db(DB_NAME);
    console.log('Connected to MongoDB');
    
    // Ensure indexes
    const moviesCollection = db.collection('movies');
    await moviesCollection.createIndex({ title: 'text', description: 'text' });
    await moviesCollection.createIndex({ genre: 1 });
    await moviesCollection.createIndex({ type: 1 });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Get all movies with pagination and filters
app.get('/api/movies', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const genre = req.query.genre;
    const type = req.query.type;
    const search = req.query.search;

    const skip = (page - 1) * limit;
    let filter = {};

    if (genre) filter.genre = { $in: genre.split(',') };
    if (type) filter.type = type;
    if (search) {
      filter.$text = { $search: search };
    }

    const movies = await db
      .collection('movies')
      .find(filter)
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.collection('movies').countDocuments(filter);

    res.json({
      data: movies,
      total,
      page,
      limit,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// Get movie by ID
app.get('/api/movies/:id', async (req, res) => {
  try {
    const { ObjectId } = require('mongodb');
    const movie = await db
      .collection('movies')
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
});

// Get genres
app.get('/api/genres', async (req, res) => {
  try {
    const genres = await db
      .collection('movies')
      .distinct('genre');

    res.json(genres.sort());
  } catch (error) {
    console.error('Error fetching genres:', error);
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
});

// Get types (Movie, TV Show, Anime)
app.get('/api/types', async (req, res) => {
  try {
    const types = await db
      .collection('movies')
      .distinct('type');

    res.json(types.sort());
  } catch (error) {
    console.error('Error fetching types:', error);
    res.status(500).json({ error: 'Failed to fetch types' });
  }
});

// Add movie (for seeding)
app.post('/api/movies', async (req, res) => {
  try {
    const result = await db.collection('movies').insertOne(req.body);
    res.status(201).json({ _id: result.insertedId, ...req.body });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ error: 'Failed to add movie' });
  }
});

// Add multiple movies (for seeding)
app.post('/api/movies/bulk', async (req, res) => {
  try {
    const result = await db.collection('movies').insertMany(req.body);
    res.status(201).json({ inserted: result.insertedCount });
  } catch (error) {
    console.error('Error adding movies:', error);
    res.status(500).json({ error: 'Failed to add movies' });
  }
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
