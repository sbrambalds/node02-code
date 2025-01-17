const express = require('express');
const movieControllers = require('../controllers/moviesControllers')

const router = express.Router();

// handle the GET for all movies
router.route('/').get((req, res) => { 
    movieControllers.getAllMovies(req, res); 
}).post((req, res) => {
    movieControllers.addMovie(req, res);
});

// handle the GET for a single movie
router.route('/:id').get((req, res) => {
    movieControllers.getMovie(req, res);
}).put((req, res) => {
    movieControllers.updateMovie(req, res);
});

// handle the POST for creating a new movie

// handle the DELETE for a single movie

// handle the PUT for updating a single movie

module.exports = router;