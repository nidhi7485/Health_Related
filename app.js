require('dotenv').config()
const express = require('express')

const app = express()
// routes
const healthRoute = require('./routes/health')

const notFound = require('./middleware/not_found')
// db
const connectDB = require('./db/connect')

const jData = require('./health_json_data.json')
// middleware
app.use(express.json())
app.get('/', (req, res) => {
  res.send(
    `<h1><a href="/health/Bmi"> BMI Category and the Health Risk</a></h1>
    <h1><a href="/health"> Health Data </a></h1>`
  )
})
app.use('/health', healthRoute)
app.use(notFound)
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
