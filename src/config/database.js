const mongoose = require("mongoose")

function connectDB (){
    mongoose.connect("mongodb+srv://sejal:Seya7NgynqK1km4j@cluster0.lgrgo69.mongodb.net/curd-operator")
    .then (()=>{
        console.log("data base is connected")
    })
}

module.exports = connectDB