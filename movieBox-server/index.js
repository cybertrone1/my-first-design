const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Helper functions to read and write JSON files
const readJSONFile = (filename) => {
    const filepath = path.join(__dirname, 'data', filename); // Ensure this is the correct path

    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};

const writeJSONFile = (filename, data) => {
    const filepath = path.join(__dirname, 'data', filename); // Ensure this is the correct path

    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, JSON.stringify(data, null, 2), 'utf-8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

// Route to get all movies
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await readJSONFile('movies.json');
        const searchQuery = req.query.search;
        if (searchQuery) {
            const filteredMovies = movies.filter(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            res.json(filteredMovies);
        } else {
            res.json(movies);
        }
    } catch (error) {
        console.error('Error reading movies data:', error);
        res.status(500).json({ message: 'Error reading movies data' });
    }
});

// Route to get a specific movie by ID
app.get('/api/movies/:id', async (req, res) => {
    try {
        const movies = await readJSONFile('movies.json');
        const movieId = parseInt(req.params.id);
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Movie not found' });
        }
    } catch (error) {
        console.error('Error reading movies data:', error);
        res.status(500).json({ message: 'Error reading movies data' });
    }
});

// Route to create a new booking
app.post('/api/bookings', async (req, res) => {
    try {
        const { movieId, userName, userEmail } = req.body;
        if (!movieId || !userName || !userEmail) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const bookings = await readJSONFile('bookings.json');
        const newBooking = {
            id: bookings.length + 1,
            movieId,
            userName,
            userEmail
        };
        bookings.push(newBooking);

        await writeJSONFile('bookings.json', bookings);
        res.status(201).json(newBooking);
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Error creating booking' });
    }
});

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to Movie Box API');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
