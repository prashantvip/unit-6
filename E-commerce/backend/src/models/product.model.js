const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    image:{ type: String, required: true } ,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    categoryId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    }]
})

module.exports = mongoose.model("product", productSchema)