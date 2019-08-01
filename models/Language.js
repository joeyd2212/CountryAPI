
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//setup database properties
const server = "localhost"
const database = "countries_db"
const username = ""
const password = ""

//connect to database

mongoose.connect(`mongodb://${server}/${database}`, {useNewURLParser:true})





const LanguageSchema = new Schema ({
    name: String,
    nativeName: String

});


module.exports = mongoose.model("Language", LanguageSchema) 