const express = require("express");
const Orders = require("../models/order.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const orders = await Orders.create(req.body);
    return res.status(200).send(orders);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Orders.find()
      .populate([
        {
          path: "productId",
          select: { name: 1, _id: 0 },
        },
      ])
      .populate({ path: "userId", select: { name: 1, _id: 0 } })
      .lean()
      .exec();
    return res.status(200).send(orders);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const orders = await Orders.findById({ _id: req.params.id }).lean().exec();

    res.status(200).json(orders);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const orders = await Orders.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(orders);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
