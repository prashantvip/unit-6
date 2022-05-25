
const express = require('express');

const router = express.Router();
const Assistat = require("../model/assistat.model");

router.get('/', async(req, res) => {
    try {
        const assistats = await Assistat.find().lean().exec();
        res.send(assistats); 
    } catch (error) {
        res.send(error.message);
    }
})

router.post('/', async(req, res) => {
    try {
        const assistats = await Assistat.create(req.body);
        res.send(assistats);
    } catch (error) {
        res.send(error.message);
    }
})


router.delete('/:carNumber', async(req, res) => {
    try {
        const assistats = await Assistat.findOneAndDelete({carNumber:req.params.carNumber}).lean().exec();
        res.send(assistats);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports=router;