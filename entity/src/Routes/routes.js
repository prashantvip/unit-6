const express = require('express');
const router = new express.Router();
const products = require('../models/productSchema');
// get the products data

router.get('/getproducts', async (req, res) => {
  try {
    //BUILD QUERY
    // 1A) Filtering
    const queryObj = {...req.query};
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    //1B) Advanced filtering
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    let query = products.find(JSON.parse(queryString));

    // 2) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }
    const producstdata = await query
    res.status(200).json({
      status: 'success',
      results: producstdata.length,
      data: {
        producstdata,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
});

// for posing data
router.post('/getproducts', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});
// getindividual

router.get('/getproducts/:id', async (req, res) => {
  try {
    const {id} = req.params;
    // console.log(id);

    const individual = await products.findOne({id: id});
    // console.log(individual + "ind mila hai");

    res.status(201).json(individual);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;