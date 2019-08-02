

const countries = require("./countries.json")

const Country = require("../models/Country")
const Currencies= require("../models/Currencies")
const Language = require("../models/Language")
// const Translation = require("../models/Translations")


//mapping through the country data to get properties i want
var newarr = countries.map(newitems => {
    let newObj = {}
    newObj.name = newitems.name
    newObj.capital= newitems.capital
    newObj.region = newitems.region
    newObj.subregion = newitems.population
    newObj.languages = newitems.languages
    newObj.translations = newitems.translations
    newObj.acronym = newitems.acronym
    newObj.currencies=  newitems.currencies
    newObj.flag = newitems.flag
    
    

    return newObj
})
console.log(newarr)

//currencies
Currencies.remove({})
    .then(() => {
        Currencies.create(currency)
            .then((currencyedata) => {
                
            })
        },       
//language
 Language.remove({})
    .then(() => {
        Language.create(language)
            .then((languageedata) => {
                
            })  
        }             

                
