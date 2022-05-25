
const mongoose=require("mongoose");

const slotSchema= new mongoose.Schema({
    slotName:{type:Number,required:true ,default:1},
   
},{
    versionKey:false
})

const Slot=mongoose.model("slots",slotSchema);

module.exports=Slot;