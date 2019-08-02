//add dependencies

let express = require("express")
let router = express.Router()

let languageController = require("../controllers/Language")
                        ///change path controllers/language
//Create CRUD operation  

//find all
router.get("/", languageController.index)

//create
router.post("/", languageController.index);

//find
router.get("/name/:name", languageController.show);

//update
router.put("/name/:name", languageController.update);

//delete
router.delete("/name:name", languageController.destroy);





//export the router for the router variable above
module.exports = router;