
const uuid = require('../helpers/uuid');
const { readFromFile, writeToFile } = require('../helpers/fsUtils');
const notes = require('express').Router();

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for retrieving notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

});




// Post Route for adding the notes
notes.post('/', (req, res) => {
    console.info(`${req.method} request received for adding notes`);

    console.info(req.body);
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    if (title && text) {

        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readFromFile('./db/db.json').then((data) => {
            console.log(JSON.parse(data));
            const listOfNotes = JSON.parse(data);
            listOfNotes.push(newNote);
            writeToFile('./db/db.json', JSON.stringify(listOfNotes)).then((data) => {

                res.json(`Note added successfully`);

            });

        });

    } else {
        res.error('Error in adding note');
    }



});



module.exports = notes;