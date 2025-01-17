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
    let index = movies.indexOf(movies.find(mv => mv.id == req.params.id));
    if (req.body.title) {
        movies[index].title = req.body.title;
    }
    if (req.body.homepage) {
        movies[index].homepage = req.body.homepage;
    }
    if (req.body.overview) {
        movies[index].overview = req.body.overview;
    }
    if (req.body.release_date) {
        movies[index].release_date = req.body.release_date;
    }
    if (req.body.poster_path) {
        movies[index].poster_path = req.body.poster_path;
    }
    res.json(movies);
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
