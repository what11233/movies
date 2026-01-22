const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = 'movies_db';

async function seedDatabase() {
  const client = new MongoClient(MONGO_URI);
  
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('movies');

    // Clear existing data
    await collection.deleteMany({});

    // Sample movie data - generating thousands of movies
    const movies = [];
    const genres = [
      'Action',
      'Comedy',
      'Drama',
      'Horror',
      'Romance',
      'Sci-Fi',
      'Fantasy',
      'Animation',
      'Thriller',
      'Documentary',
    ];
    const types = ['Movie', 'TV Show', 'Anime'];
    const years = Array.from({ length: 30 }, (_, i) => 1995 + i);

    const titles = [
      'The', 'A', 'Return', 'The Secret', 'Lost', 'Beyond', 'Under', 'Over',
      'Journey', 'Quest', 'Adventure', 'Mystery', 'Shadows', 'Echoes', 'Whispers',
      'Thunder', 'Storm', 'Fire', 'Ice', 'Heart', 'Soul', 'Spirit', 'Legend',
      'Saga', 'Chronicles', 'Tales', 'Legends', 'Kingdoms', 'Empire', 'Dynasty',
    ];

    // Generate 5000 movies
    for (let i = 1; i <= 5000; i++) {
      const randomGenres = genres.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
      const randomType = types[Math.floor(Math.random() * types.length)];
      const randomYear = years[Math.floor(Math.random() * years.length)];
      const title1 = titles[Math.floor(Math.random() * titles.length)];
      const title2 = titles[Math.floor(Math.random() * titles.length)];

      movies.push({
        title: `${title1} ${title2} ${i}`,
        description: `An exciting ${randomGenres[0]} story with twists and turns. This ${randomType.toLowerCase()} from ${randomYear} features incredible cinematography and compelling characters.`,
        year: randomYear,
        rating: Math.round((Math.random() * 5 + 5) * 10) / 10,
        genre: randomGenres,
        type: randomType,
        episodes: randomType === 'TV Show' ? Math.floor(Math.random() * 20) + 5 : null,
        duration: randomType === 'Movie' ? Math.floor(Math.random() * 90) + 80 : Math.floor(Math.random() * 50) + 20,
        poster: `https://via.placeholder.com/300x450?text=${encodeURIComponent(`${title1} ${title2}`)}`,
        backdrop: `https://via.placeholder.com/1200x400?text=${encodeURIComponent(`${title1} ${title2}`)}`,
        cast: [
          `Actor ${Math.floor(Math.random() * 1000) + 1}`,
          `Actor ${Math.floor(Math.random() * 1000) + 1}`,
          `Actor ${Math.floor(Math.random() * 1000) + 1}`,
        ],
        director: `Director ${Math.floor(Math.random() * 500) + 1}`,
        plot: `Deep dive into the world of ${randomGenres[0].toLowerCase()}. Follow the protagonist as they navigate through challenges and discover the truth.`,
        votes: Math.floor(Math.random() * 50000) + 100,
        watched: Math.random() > 0.7,
        favorite: Math.random() > 0.9,
      });
    }

    await collection.insertMany(movies);
    console.log(`✓ Seeded ${movies.length} movies into the database`);

    // Create indexes
    await collection.createIndex({ title: 'text', description: 'text' });
    await collection.createIndex({ genre: 1 });
    await collection.createIndex({ type: 1 });
    await collection.createIndex({ year: 1 });
    await collection.createIndex({ rating: -1 });
    console.log('✓ Indexes created');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
