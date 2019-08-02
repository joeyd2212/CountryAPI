//add dependencies

let express = require("express")
let router = express.Router()

let currencyController = require("../controllers/currency")
                /////chance path to controller/currency

//Create CRUD operation  


//find all
router.get("/", currencyController.index)

//create
router.post("/", currencyController.index);

//find
router.get("/name/:name", currencyController.show);

//update
router.put("/name/:name", currencyController.update);

//delete
router.delete("/name:name", currencyController.destroy);






//export the router for the router variable above
module.exports = router;