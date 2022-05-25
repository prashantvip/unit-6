
const express = require('express');

const router = express.Router();

const Spot=require('../model/spot.model');

router.get('/', async(req, res) => {
    try {
        const spots = await Spot.find().lean().exec();
        res.send(spots); 
    } catch (error) {
        res.send(error.message);
    }
})

router.get("/:id",async(req,res)=>{

    try {

        const spots=await Spot.findById(req.params.id).lean().exec()

        return res.send(spots);
        
    } catch (error) {
        return res.send(error.message)
    }
})

router.post('/', async(req, res) => {
    try {
        const spot = await Spot.create(req.body);
        res.send(spot);
    } catch (error) {
        res.send(error.message);
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        
        const spot=await Spot.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        return res.send(spot);


    } catch (error) {
        return res.send(error.message)
    }
})

module.exports=router;