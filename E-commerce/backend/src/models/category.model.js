const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  ancestor: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
});

module.exports = mongoose.model("category", categorySchema);
