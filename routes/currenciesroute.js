//add dependencies

let express = require("express")
let router = express.Router()

let CurrencyModel = require("../models/Currencies")

//Create CRUD operation  



//Create new country

router.post("/currency",(req, res) => {
    console.log("post")
    console.log(req.body)
    let model = new CurrencyModel(req.body)
    model.save()
     .then(doc => {

        //if document save, failes
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

router.get("/currency", (req,res) => {

    //check for name query string
    if(!req.query.name){
        return res.status(400).send("Name parameter is missing")
    }
    CurrencyModel.findOne({
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

router.put("/currency",(req,res) =>{

//check for name query string
if(!req.query.name){
    return res.status(400).send("Name parameter is missing")
}
    //update data
    CurrencyModel.findOneAndUpdate({
        name:req.query.name //name of the country being updated


//json passed and will contain new value(req.body)-whatever you post in body section post man, update raw value
    }, req.body, {new:true}) // after update API should display new  updated value, not the old one
    .then(doc => {
        res.json(doc) //print out the document with updated values
    })
    .catch(err => {
        res.status(500).json(err)
    })

})





//delete country

router.delete("/currency",(req,res) =>{

    //check for name query string
    if(!req.query.name){
        return res.status(400).send("Name parameter is missing")
    }
        //delete data
        CurrencyModel.findOneAndRemove({
            name:req.query.name //name of the country being deleted
    
    
    
        }) 
        .then(doc => {
            res.json(doc) //print out the document with delete country/shoaws what got deleted
        })
        .catch(err => {
            res.status(500).json(err)
        })
    
    })



//export the router for the router variable above
module.exports = router;