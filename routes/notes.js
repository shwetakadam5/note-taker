const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, writeToFile } = require('../helpers/fsUtils');


// GET Route for retrieving all the notes
notes.get('/', (req, res) => {

    console.info(`${req.method} request received for retrieving notes`);
    readFromFile('./db/db.json').then((data) => res.status(200).json(JSON.parse(data)));

});

// Post Route for adding the notes
notes.post('/', (req, res) => {

    console.info(`${req.method} request received for adding notes`);
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    if (title && text) {
        //Create the new note object
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readFromFile('./db/db.json').then((data) => {
            const listOfNotes = JSON.parse(data);
            listOfNotes.push(newNote);
            writeToFile('./db/db.json', JSON.stringify(listOfNotes)).then(() => {
                res.status(201).json({
                    "Success": "Note added successfully.",
                    "Note Created:": newNote
                });
            });
        });
    } else {
        res.status(400).json({
            "Error": "Invalid request."
        });
    }

});

// Delete Route for deleting the note based on id.
notes.delete('/:id', (req, res) => {

    console.info(`${req.method} request received for deleting notes`);
    if (req.params.id) {
        readFromFile('./db/db.json').then((data) => {
            const listOfNotes = JSON.parse(data);
            let noteToDelete = listOfNotes.filter(el => el.id === req.params.id);
            console.log(noteToDelete.length);
            if (noteToDelete.length) {
                let filteredListOfNotes = listOfNotes.filter(el => el.id !== req.params.id);
                writeToFile('./db/db.json', JSON.stringify(filteredListOfNotes)).then(() => {
                    res.status(200).json({
                        "Success": "Note deleted successfully.",
                        "Note Deleted:": noteToDelete

                    });
                });
            } else {
                res.status(406).json({
                    "Error": "The Note ID does not exist to delete."
                });
            }
        });
    } else {
        res.status(400).json({
            "Error": "Note ID not provided."
        });
    }

});

module.exports = notes;