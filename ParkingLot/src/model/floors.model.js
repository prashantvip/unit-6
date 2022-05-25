
const mongoose=require("mongoose");

const floorsSchema= new mongoose.Schema({
    floorName:{type:Number,required:true ,default:"1"},
},{
    versionKey:false
})

const Floor = mongoose.model("floors",floorsSchema);

module.exports=Floor;