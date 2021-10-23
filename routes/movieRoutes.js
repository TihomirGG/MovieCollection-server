const movieController = require('../controllers/movieController');
const express = require('express');

let router = express.Router();

router.get('/all', movieController.get.all);

router.get('/movie',movieController.get.movie);

router.get('/search',movieController.get.search)




module.exports = router;
