const express = require('express')
const Meals = require('../models/Meals')
const router = express.Router();

router.get('/',(req,res) => {
    Meals.find()
    .exec()
    .then(x => res.send(x))
    // res.send('hola soy meals')
})

router.get('/:id',(req,res) => {
    Meals.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x) )
})

router.post('/',(req,res) => {
    Meals.create(req.body).then(x => 
        res.status(201).send(x))
    // res.send('soy post')
})

router.put('/:id',(req,res)=>{
    Meals.findByIdAndUpdate(req.params.id,req.body)
    .then( () => res.sendStatus(204) )
    // res.send('soy put')
})

router.delete('/:id',(req,res) => {
    Meals.findByIdAndDelete(req.params.id).exec().then( () => res.sendStatus(204) )
    // res.send('soy delete')
})

module.exports = router