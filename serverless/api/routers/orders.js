const express = require('express')
const Orders = require('../models/Orders')
const router = express.Router();
const {isAuthenticated, hasRoles} = require('../auth')

router.get('/',(req,res) => {
    Orders.find()
    .exec()
    .then(x => res.send(x))
    // res.send('hola soy Orders')
})

router.get('/:id',(req,res) => {
    Orders.findByid(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/',isAuthenticated,(req,res) => {
    const {_id} = req.user
    Orders.create({...req.body,user_id: _id}).then(x => 
        res.status(201).send(x))
    // res.send('soy post')
})

router.put('/:id',isAuthenticated, hasRoles(['admin','user']), (req,res)=>{
    Orders.findByIdAndUpdate, (req.params.id,req.body)
        .then( () => res.sendStatus(204) )
    // res.send('soy put')
})

router.delete('/:id',isAuthenticated,(req,res) => {
    Orders.findByIdAndDelete(req.params.id).exec().then( () => res.sendStatus(204))
    // res.send('soy delete')
})

module.exports = router