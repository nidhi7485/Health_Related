const express = require('express')

const router = express.Router()

const {
  helthJsonData,
  getBMI_cate,
  countPeopleHealth,
} = require('../controller/health')
router.route('/').get(helthJsonData)
router.route('/Bmi').get(getBMI_cate)
router.route('/countHealth').get(countPeopleHealth)
module.exports = router
