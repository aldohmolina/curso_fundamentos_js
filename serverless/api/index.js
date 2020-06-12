const express = require('express')
const app = express()

app.get('*',(req,res) => {
    console.log('Hola mundo mi primera aplicacion serverless');
    res.send({ mensaje: 'Chancito feliz' })
})

module.exports = app