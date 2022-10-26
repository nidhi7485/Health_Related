const mongoose = require('mongoose')

const healthCategorySchema = new mongoose.Schema({
  bmi: {
    type: Number,
    required: [true],
  },
  bmi_category: {
    type: String,
    required: [true],
  },
  health_risk: {
    type: String,
    required: [true],
  },
})
module.exports = mongoose.model('Health_cate', healthCategorySchema)
