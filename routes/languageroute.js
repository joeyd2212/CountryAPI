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
router.get(":id", languageController.show);

//update
router.put("/:name", languageController.update);

//delete
router.delete("/:id", languageController.destroy);





//export the router for the router variable above
module.exports = router;