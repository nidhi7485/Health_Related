const express = require('express')

const router = express.Router()

const { helthJsonData, getBMI_cate } = require('../controller/health')
router.route('/').get(helthJsonData)
router.route('/Bmi').get(getBMI_cate)
module.exports = router
