const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://prashantvip:prashantvip@cluster0.g4xc3.mongodb.net/dbDesign?retryWrites=true&w=majority")
} 

module.exports = connect;
