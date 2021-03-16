// DO YOUR MAGIC
const express = require('express');
const Cars = require('./cars-model');

const router = express.Router()

router.get('/', (req,res, next)=>{
    Cars.getAll()
        .then(cars=>{   
            res.status(200).json(cars)
        })
        .catch(next)
})




module.exports = router