const express = require('express')
const router = express.Router()
const speciesController = require('../controller/speciesController')

router.get('/get-all-species',speciesController.get_all_species)
router.get('/get-one-species/:speciesId',speciesController.get_one_species)

module.exports = router