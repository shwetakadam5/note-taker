const fs = require('fs');

const notes = require('express').Router();

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for retrieving notes`);


    fs.readFile('./db/db.json', 'utf8', (error, data) => {
        error ? console.error(error) : res.json(JSON.parse(data));
    });


});

module.exports = notes;