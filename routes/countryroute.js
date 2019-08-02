//add dependencies

let express = require("express")
let router = express.Router()

let countryController = require("../controllers/country") 
                    //change path to controllers/country when created
//Create CRUD operation  

//find all
router.get("/", countryController.index)

//create
router.post("/", countryController.create);

//find by name
router.get("/name/:name", countryController.show);

//update name
router.put("/name/:name", countryController.update);

//delete by name
router.delete("/name:name", countryController.destroy);






//export the router for the router variable above
module.exports = router;