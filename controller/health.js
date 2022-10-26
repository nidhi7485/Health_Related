const Health_desc = require('../models/Health_desc')
const Health_cate = require('../models/Health_cate')

const helthJsonData = async (req, res) => {
  const healthData = await Health_desc.find()
  res.status(200).json({ healthData, totalData: healthData.length })
}

const getBMI_cate = async (req, res) => {
  try {
    var weight
    var height
    var bmi
    var bmi_category
    var health_risk
    var hlth_ct = [{ bmi, bmi_category, health_risk }]
    // console.log(bmiRange)
    const healthData = await Health_desc.find()

    for (var i = 0; i < healthData.length; i++) {
      weight = healthData[i].WeightKg
      height = healthData[i].HeightCm
      height = height / 100
      height = height * height
      bmi = weight / height
      if (bmi <= 18.5) {
        bmi_category = 'Underweight'
        health_risk = 'Malnutrition risk'
      } else if (bmi >= 18.5 || bmi <= 24.5) {
        bmi_category = ' Normal weight'
        health_risk = ' Low risk'
      } else if (bmi >= 25 || bmi <= 29.9) {
        bmi_category = ' Overweight'
        health_risk = ' Enhanced risk'
      } else if (bmi >= 30 || bmi <= 34.9) {
        bmi_category = ' Moderately obese'
        health_risk = ' Medium risk'
      } else if (bmi >= 35 || bmi <= 39.9) {
        bmi_category = 'Severel obese'
        health_risk = ' High risk'
      } else if (bmi >= 40) {
        bmi_category = 'Very severely obese'
        health_risk = 'very High risk'
      }
      hlth_ct[i] = { bmi, bmi_category, health_risk }
    }
    console.log(hlth_ct)
    await Health_cate.deleteMany()
    await Health_cate.create(hlth_ct)

    res.send('created')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  helthJsonData,
  getBMI_cate,
}
