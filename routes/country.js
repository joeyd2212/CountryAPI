//add dependencies

let express = require("express")
let router = express.Router()

let CountryModel = require("../models/Country")

//Create CRUD operation  

//Create new country






//Read country

router.get("/'country", (req,res) => {

    //check for name query string
    if(!req.query.name){
        return res.status(400).send("Name parameter is missing")
    }
    CountryModel.findOne({
        name: req.query.name
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


//update country




//delete country