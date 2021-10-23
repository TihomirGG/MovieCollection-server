const movieModel = require('../models/movie');

// async function addMovie() {
//     const title = 'Harry Potter - 8';
//     const description =
//         "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.";
//     const genres = [
//         'Adventure','Mystery','Fantasy'];
//     const length = 130;
//     const imageUrl = 'https://res.cloudinary.com/diwhndyiu/image/upload/v1634989644/hr8_xjjmeo.png';
//     await movieModel.create({ title, description, genres, length, imageUrl });
// }

async function favouriteMovies() {
    const movies = await movieModel.where('isFavourite').equals(false);
    return movies;
}

async function getMovie(id) {
    const movie = await movieModel.findOne({ id });
    return movie;
}

async function search(keyword) {
    const lowered = keyword.toLowerCase() + '';
    const result = await movieModel.find({ title: { $regex: lowered, $options: 'i' } });
    return result;
}
module.exports = { favouriteMovies, getMovie, search };
