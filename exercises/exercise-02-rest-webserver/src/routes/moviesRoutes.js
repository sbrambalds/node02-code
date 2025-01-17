const express = require('express');
const movieControllers = require('../controllers/moviesControllers')

const router = express.Router();

router.route('/');

// handle the GET for all movies

// handle the POST for creating a new movie

router.route('/:id');

// handle the GET for a single movie

// handle the DELETE for a single movie

// handle the PUT for updating a single movie

module.exports = router;