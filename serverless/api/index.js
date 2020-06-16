const express = require('express')
const mongoose = require('mongoose')
const bodyParset = require('body-parser')
const meals = require('./routers/meals')
const orders = require('./routers/orders')
const app = express()
app.use(bodyParset.json())

mongoose.connect(process.env.MONGODB_URI_SERVERLESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// const Users = mongoose.model(
//     'User',new mongoose.Schema({
//     name:'String'
// }))
// Users.create({name:'chanchito triste'})


// app.get('*',(req,res) => {
//     Users.find()
//     .then(x => res.send(x))
// })

app.use('/api/meals',meals)
app.use('/api/orders',orders)

module.exports = app