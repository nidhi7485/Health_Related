require('dotenv').config()

const connectDB = require('./db/connect')
const Health_desc = require('./models/Health_desc')

const health_json_data = require('./health_json_data.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Health_desc.deleteMany()
    await Health_desc.create(health_json_data)
    console.log('success!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()
