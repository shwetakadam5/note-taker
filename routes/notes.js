
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

    }



});


notes.delete('/:id', (req, res) => {
    console.info(`${req.method} request received for deleting notes`);
    console.log(req.params.id);


    readFromFile('./db/db.json').then((data) => {
        console.log(JSON.parse(data));
        const listOfNotes = JSON.parse(data);
        let filteredListOfNotes = listOfNotes.filter(el => el.id !== req.params.id);

        console.log(filteredListOfNotes);


        writeToFile('./db/db.json', JSON.stringify(filteredListOfNotes)).then((data) => {

            res.json(`Note deleted successfully`);

        });

    });

});



module.exports = notes;