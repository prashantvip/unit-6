
const express = require('express');

const router = express.Router();
const Floor=require("../model/floors.model");
router.get('/', async(req, res) => {
    try {
        const floors = await Floor.find().lean().exec();
        res.send(floors); 
    } catch (error) {
        res.send(error.message);
    }
})


router.get("/:id",async(req,res)=>{

    try {

        const floors=await Floor.findById(req.params.id).lean().exec()

        return res.send(floors);
        
    } catch (error) {
        return res.send(error.message)
    }
})


router.post('/', async(req, res) => {
    try {
        const floors = await Floor.create(req.body);
        res.send(floors);
    } catch (error) {
        res.send(error.message);
    }
})


router.patch("/:id",async(req,res)=>{
    try {
        
        const floors=await Floor.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        return res.send(floors);


    } catch (error) {
        return res.send(error.message)
    }
})


module.exports=router;