const express = require('express')
const router = express.Router()
const vehicleController = require('../controller/vehicleController')

router.get('/get-all-vehicles',vehicleController.get_all_vehicles)
router.get('/get-one-vehicle/:vehicleId',vehicleController.get_one_vehicle)

module.exports = router