const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        minLength: [1, 'Username have to be at least 1 symbols'],
    },
    description: {
        type: String,
        required: true,
        minLength: [3, 'Password must be at least 3 symbols!'],
    },
    genres: {
        type: [],
        required: true,
    },
    length: {
        type: Number,
        required: true,
        validate: {
            validator: v => (Number(v) > 0 ? true : false),
            message: 'Length must be a positive number',
        },
    },
    rating: {
        type: Number,
        default: 0,
    },
    note: {
        type: String,
        default: '',
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const model = mongoose.model('Movie', movieSchema);

module.exports = model;
