const router = require('express').Router();

// Import the files containing our routes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;
