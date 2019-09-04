//add dependencies

let express = require("express")
let router = express.Router()

let currencyController = require("../controllers/currency")

//Create CRUD operation  


//find all
router.get("/", currencyController.index)

//find By
router.get("/:id", currencyController.show);



//export the router for the router variable above
module.exports = router;