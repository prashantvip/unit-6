
const mongoose = require("mongoose");

const assistatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone:{type:String,required:true},
    carNumber:{type:String,required:true},
    carType:{type:String,required:true},
    floor:{type:String,required:true},
    slot:{type:Number,required:true},
    entryTime:{type:Number,required:true},
}, {
    versionKey: false,
    timestamps: true
})


const Assistat = mongoose.model("assistats", assistatSchema);

module.exports = Assistat;