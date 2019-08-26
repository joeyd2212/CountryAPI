//add dependencies

const mongoose = require("../db/connection"); 
const Schema = mongoose.Schema;

//require subdocument models
let LanguageSchema = require("./Language").schema
let CurrenciesSchema = require("./Currencies").schema



//create country Schema

let CountrySchema = new Schema ({
    name: String,
    capital: String,
    region: String,
    subregion: String,
    population: Number,
    languages: [LanguageSchema],
    currencies: [CurrenciesSchema],
    flag: String
});


//export module
module.exports = mongoose.model("Country", CountrySchema) ;






