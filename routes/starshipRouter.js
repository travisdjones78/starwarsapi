const express = require('express')
const router = express.Router()
const starshipsController = require('../controller/starshipController')

router.get('/get-all-starships',starshipsController.get_all_starships)
router.get('/get-one-starship/:starshipId',starshipsController.get_one_starship)

module.exports = router