const Health_desc = require('../models/Health_desc')

const getBMI = async (req, res) => {
  var weight
  var height = 175 / 100
  console.log(height)
  const healthData = await Health_desc.find()
  for (var i = 0; i < healthData.length; i++) {
    weight = healthData[i].WeightKg
    height = healthData[i].HeightCm
    height = height / 100
  }

  res.status(200).json({ healthData })
}

module.exports = {
  getBMI,
}
