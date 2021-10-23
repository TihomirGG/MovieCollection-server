const { favouriteMovies, getMovie, search } = require('../services/movieService');

module.exports = {
    get: {
        all: function getAllMovies() {
            console.log();
        },
        movie: async function getMovieById(req, res) {
            const { id } = req.query;
            const movie = await getMovie(id);
            res.set({ 'Content-Type': 'application/json' });
            res.send(JSON.stringify(movie));
        },
        favourite: async function getFavs(req, res) {
            const movies = await favouriteMovies();
            res.set({ 'Content-Type': 'application/json' });
            res.send(JSON.stringify(movies));
        },
        search: async function searchFilms(req,res) {
            const {keyword} = req.query;
            const filteredMovies = await search(keyword);
            res.set({ 'Content-Type': 'application/json' });
            res.send(JSON.stringify(filteredMovies));
        }
    },
    post: {
        changeRating: function changeRating(req, res) {},
    },
};
