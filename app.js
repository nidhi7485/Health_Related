require('dotenv').config()
const express = require('express')

const app = express()
// routes
const healthRoute = require('./routes/health')

// db
const connectDB = require('./db/connect')

const jData = require('./health_json_data.json')
// middleware
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send(jData)
// })
app.use('/health', healthRoute)

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
