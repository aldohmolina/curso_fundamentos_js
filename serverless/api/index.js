// node_modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParset = require('body-parser')
const cors = require('cors')

// models
const meals = require('./routers/meals')
const orders = require('./routers/orders')

//app use
const app = express()
app.use(bodyParset.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI_SERVERLESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api/meals',meals)
app.use('/api/orders',orders)

module.exports = app