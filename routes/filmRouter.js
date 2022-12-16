const express = require('express')
const filmController = require('../controller/filmController')
const router = express.Router()

router.get('/get-all-films',filmController.get_all_films)
router.get('/get-one-film/:filmId',filmController.get_one_film)

module.exports = router