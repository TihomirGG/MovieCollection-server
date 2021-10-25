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
    try {
        const movies = await movieModel.where('isFavourite').equals(true);
        return movies;
    } catch (e) {
        console.log(e);
    }
}

async function getMovie(id) {
    try {
        const movie = await movieModel.findOne({ _id: id });
        return movie;
    } catch (e) {
        console.log(e);
    }
}

async function search(keyword) {
    try {
        const lowered = keyword.toLowerCase() + '';
        const result = await movieModel.find({ title: { $regex: lowered, $options: 'i' } });
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
    }
}

async function updateRating(id, rating) {
    try {
        await movieModel.findOneAndUpdate({ _id: id }, { rating: Number(rating) });
        const movie = await movieModel.findOne({ _id: id });
        return movie;
    } catch (e) {
        console.log(e);
    }
}

async function updateNote(id, note) {
    try {
        await movieModel.findOneAndUpdate({ _id: id }, { note: note });
        const movie = await movieModel.findOne({ _id: id });
        return movie;
    } catch (e) {
        console.log(e);
    }
}

async function updateFavouriteStatus(id, isFavourite) {
    try {
        await movieModel.findOneAndUpdate({ _id: id }, { isFavourite: isFavourite });
        const movie = await movieModel.findOne({ _id: id });
        return movie;
    } catch (e) {
        console.log(e);
    }
}
module.exports = { favouriteMovies, getMovie, search, updateRating, updateNote, updateFavouriteStatus };
