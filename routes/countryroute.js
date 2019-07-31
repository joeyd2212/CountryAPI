//add dependencies

let express = require("express")
let router = express.Router()

let CountryModel = require("../models/Country")

//Create CRUD operation  

//Create new country

router.post("/country",(req, res) => {
    let model = new CountryModel(req.body)
    model.save()
     .then(doc => {

        //if save failes

        if (!doc || doc.length === 0) {
            
        }
     })
})




//Read country

router.get("/country", (req,res) => {

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



//export the router for the router variable above
module.exports = router;