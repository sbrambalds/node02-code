const express = require('express');
const movieControllers = require('../controllers/moviesControllers')

const router = express.Router();

router.route('/').get((req, res) => { // handle the GET for all movies
    movieControllers.getAllMovies(req, res); 
}).post((req, res) => { // handle the POST for creating a new movie
    movieControllers.addMovie(req, res);
});

router.route('/:id').get((req, res) => {// handle the GET for a single movie
    movieControllers.getMovie(req, res);
}).put((req, res) => { // handle the PUT for updating a single movie
    movieControllers.updateMovie(req, res);
}).delete((req, res) => { // handle the DELETE for a single movie
    movieControllers.deleteMovie(req, res);
});





module.exports = router;