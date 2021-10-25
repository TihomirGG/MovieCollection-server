const movieController = require('../controllers/movieController');
const express = require('express');

let router = express.Router();

router.get('/all', movieController.get.all);

router.get('/movie', movieController.get.movie);

router.get('/search', movieController.get.search);

router.get('/favourite', movieController.get.favourite);

router.post('/notes', movieController.post.changeNote);

router.post('/ratings', movieController.post.changeRating);

router.post('/favourite', movieController.post.changeFavouriteStatus)

module.exports = router;
