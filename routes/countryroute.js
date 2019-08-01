//add dependencies

let express = require("express")
let router = express.Router()

let CountryModel = require("../models/Country")

//Create CRUD operation  



//Create new country

router.post("/country",(req, res) => {
    console.log("post")
    console.log(req.body)
    let model = new CountryModel(req.body)
    model.save()
     .then(doc => {

        //if document save failes
                //500 is a server error
        if (!doc || doc.length === 0) {
            console.log("save fail")
            return res.status(500).send(doc)

        }

        //save succes //201 code for everything ok
           console.log("save success")
        res.status(201).send(doc)


     })
     .catch (err => {
         console.log("error")
         res.status(500).json(err)
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