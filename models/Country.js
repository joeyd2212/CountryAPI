//add dependencies

const mongoose = require("mongoose"); 

//require subdocument models
let LanguageSchema = require("./Language").schema
let CurrenciesSchema = require("./Currencies").schema
let TranslationsSchema = require("./Translations").schema







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
    flag: String
});


//export module
module.exports = mongoose.model("Country", CountrySchema) ;

