//add dependencies

let express = require("express")
let router = express.Router()

let countryController = require("../controllers/country") 

//Create CRUD operation  

//find all
router.get("/", countryController.index)

//create
router.post("/", countryController.create);

//find by name
router.get("/:id", countryController.show);

//update name
router.put("/:name", countryController.update);

//delete by name
router.delete("/:id", countryController.destroy);






//export the router for the router variable above
module.exports = router;