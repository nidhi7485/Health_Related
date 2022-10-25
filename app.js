require('dotenv').config()
const express = require('express')

const app = express()

// db
const connectDB = require('./db/connect')

const jData = require('./health_json_data.json')
// middleware
app.use(express.json())
app.get('/', (req, res) => {
  res.send(jData)
})

const port = process.env.PORT || 8000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('connected to db...')
    app.listen(port, console.log(`server is running on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
