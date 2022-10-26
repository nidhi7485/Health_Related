const express = require('express')

const router = express.Router()

const { getBMI } = require('../controller/health')
router.route('/Bmi').get(getBMI)
module.exports = router
