const {json} = require("express");
const express = require("express");
const router = express.Router();
const data = [
  {
    app: "limit",
    request: "max5",
  },
];
router.get("/", function (req, res, next) {
  res.json(data);
});

module.exports = router;
