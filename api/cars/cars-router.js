// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');
const {checkCarId, checkCarPayload, checkVinNumberValid} = require('./cars-middleware.js');

const router = express.Router()

router.get('/', (req,res, next)=>{
    Cars.getAll()
        .then(cars=>{   
            res.status(200).json(cars)
        })
        .catch(next)
})

router.get('/:id', checkCarId, (req, res, next) =>{
    console.log(req.carId)
    res.status(200).json(req.carId)
      
})

router.post('/', checkCarPayload, checkVinNumberValid, (req, res, next)=>{
    Cars.create(req.body)
        .then(car=>{
            res.status(201).json(car)
        })
        .catch(next)
})




module.exports = router