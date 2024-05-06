require("dotenv").config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

const api = require('./routes/index');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api);

// This view route is a GET route for the homepage
app.get('/', (req, res) => {

    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {

    console.log(__dirname);
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});









app.get('/secret', (req, res) => {
    console.log("credential", process.env.USER);
    res.end();
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
