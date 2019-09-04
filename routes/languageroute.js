//add dependencies

let express = require("express")
let router = express.Router()

let languageController = require("../controllers/Language")

//Create CRUD operation  

//find all
router.get("/", languageController.index)

//find By
router.get(":id", languageController.show);







//export the router for the router variable above
module.exports = router;