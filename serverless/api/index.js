const express = require('express')
const mongoose = require('mongoose')
const plates = require('./routers/plates')
const orders = require('./routers/orders')
const app = express()

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

app.use('/api/plates',plates)
app.use('/api/orders',orders)

module.exports = app