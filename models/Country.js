

const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;




const CountrySchema = new Schema ({
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

module.exports = mongoose.model("Country", CountrySchema) ;

