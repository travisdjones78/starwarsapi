const express = require('express')
const router = express.Router()
const peopleController = require('../controller/peopleController')

router.get('/get-all-people',peopleController.get_all_people)
router.get('/get-one-person/:personId',peopleController.get_one_person)

module.exports = router