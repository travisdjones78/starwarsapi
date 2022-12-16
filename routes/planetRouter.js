const express = require('express')
const router = express.Router()
const planetController = require('../controller/planetController')

router.get('/get-all-planets',planetController.get_all_planets)
router.get(`/get-one-planet/:planetId`,planetController.get_one_planet)

module.exports = router