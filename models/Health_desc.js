const mongoose = require('mongoose')

const healthDescSchema = new mongoose.Schema({
  Gender: {
    type: String,
    required: [true],
  },
  HeightCm: {
    type: Number,
    required: true,
  },
  WeightKg: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Health_desc', healthDescSchema)
