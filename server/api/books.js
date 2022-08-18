// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
//const Book = require('../../models/Book');
const Book = require('../dummydata/articles');


// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Book.find()
  .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

module.exports = router;