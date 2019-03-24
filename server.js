require('dotenv').config()
const express = require('express')
require('express-async-errors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const usersRouter = require('./src/routers/users.router')
const placesRouter = require('./src/routers/places.router')
const adminRouter = require('./src/routers/admin.router')

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/ep10'
const PORT = process.env.PORT || 4040

const app = express()

app.use(bodyParser.json())

app.use('/users', usersRouter)
app.use('/users/:userId/places', placesRouter)
app.use('/admin', adminRouter)

app.get('/', (req, res) => res.send('Hello World!'))

const run = async () => {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
  })
  await app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
  })
}

run()
