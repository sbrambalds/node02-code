const movies = require('./movies.json');

// create logic for returning all movies
function getAllMovies(req, res) {
    res.json(movies);
};

// create logic for returning a single movie based on the id
function getMovie(req, res) {
    res.json(movies.find(movie => movie.id == req.params.id));
};

// create logic for adding a new movie
function addMovie(req, res) {
    let id = movies.length + 1;
    req.body.id = id;
    movies.push(req.body);
    res.json(movies);
}

// create logic for updating a movie
function updateMovie(req, res) {
    /**
        let movie = movies.find(mv => mv.id == req.params.id);
        movie.title = req.body.title;
        movie.homepage = req.body.homepage;
        movie.overview = req.body.overview;
        movie.release_date = req.body.release_date;
        movie.poster_path = req.body.poster_path;
        ;
    */
}

// create logic for deleting a movie
function deleteMovie(req, res) {
    let index = movies.indexOf(movies.find(movie => movie.id == req.params.id));
    movies.splice(index, 1);
    res.json(movies);
}

module.exports = { 
    // export all the functions you created
    getAllMovies,
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie
}
