const express = require("express")
const noteModule = require("./models/notes.model")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post ("/notes", async(req,res) =>{
    const {title , description} = req.body

    const note= await noteModule.create({
       title,description
    })

    res.status(201).json({
        message:"note created succesfull",
        note
    })

})

module.exports = app 

 