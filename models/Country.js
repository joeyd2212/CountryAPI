//add dependencies

const mongoose = require("mongoose"); 

//require subdocument models
let LanguageSchema = require("./Language").schema
let CurrenciesSchema = require("./Currencies").schema
let TranslationsSchema = require("./Translations").schema



//setup database properties
const server = "localhost"
const database = "countries_db"
const username = ""
const password = ""

//connect to database

mongoose.connect(`mongodb://${server}/${database}`, {useNewURLParser:true})




const Schema = mongoose.Schema;


//create country Schema

let CountrySchema = new Schema ({
    name: String,
    capital: String,
    region: String,
    subregion: String,
    population: Number,
    languages: [LanguageSchema],
    translations: {TranslationsSchema},
    acronym: String,
    currencies: [CurrenciesSchema],
    flag: String,
    

    

});


//export module
module.exports = mongoose.model("Country", CountrySchema) ;

