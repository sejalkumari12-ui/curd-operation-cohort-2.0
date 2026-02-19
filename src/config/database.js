const mongoose = require("mongoose")

function connectDB (){
    mongoose.connect("")
    .then (()=>{
        console.log("data base is connected")
    })
}

module.exports = connectDB 