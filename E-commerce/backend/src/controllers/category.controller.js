
const express = require("express");
const Category = require("../models/category.model");
const router = express.Router();
router.post("/create", async (req, res) => {
    try {
      const category = await Category.create(req.body);
      return res.status(201).send(category);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
  router.get("/", async (req, res) => {
    try {
      const category = await Category.find().lean().exec();
      return res.status(201).send(category);
    } catch (err) {
      return res.status(500).send(error);
    }
  });
module.exports = router;