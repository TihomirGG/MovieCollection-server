const {
    favouriteMovies,
    getMovie,
    search,
    updateRating,
    updateNote,
    updateFavouriteStatus,
} = require('../services/movieService');

module.exports = {
    get: {
        all: function getAllMovies() {
            console.log();
        },
        movie: async function getMovieById(req, res) {
            try {
                const { id } = req.query;
                const movie = await getMovie(id);
                res.set({ 'Content-Type': 'application/json' });
                res.send(JSON.stringify(movie));
            } catch (e) {
                console.log(e);
            }
        },
        favourite: async function getFavs(req, res) {
            const movies = await favouriteMovies();
            res.set({ 'Content-Type': 'application/json' });
            res.send(JSON.stringify(movies));
        },
        search: async function searchFilms(req, res) {
            try {
                const { keyword } = req.query;
                const filteredMovies = await search(keyword);
                console.log(filteredMovies);
                res.set({ 'Content-Type': 'application/json' });
                res.send(JSON.stringify(filteredMovies));
            } catch (e) {
                console.log(e);
            }
        },
    },
    post: {
        changeNote: async function changeNote(req, res) {
            try {
                const { note, id } = req.body;
                const movie = await updateNote(id, note);
                res.set({ 'Content-Type': 'application/json' });
                res.send(JSON.stringify(movie));
            } catch (e) {
                console.log(e);
            }
        },
        changeRating: async function (req, res) {
            try {
                const { rating, id } = req.body;
                const movie = await updateRating(id, rating);
                res.set({ 'Content-Type': 'application/json' });
                res.send(JSON.stringify(movie));
            } catch (e) {
                console.log(e);
            }
        },
        changeFavouriteStatus: async function changeFavouriteStateus(req, res) {
            try {
                const { isFavourite, id } = req.body;
                const movie = await updateFavouriteStatus(id, isFavourite);
                res.set({ 'Content-Type': 'application/json' });
                res.send(JSON.stringify(movie));
            } catch (e) {
                console.log(e);
            }
        },
    },
};
