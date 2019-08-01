
const countries = require("../countries.json")

const Country = require("../models/Country.js")
// const Currencies= require("../models/Currencies")
// const Language = require("../models/Language")
// const Translation = require("../models/Currencies")






//need to map out the properties I want ...Already in URL..need to redo?
var newarr = countries.map(newitems => {
    let newObj = {}
    newObj.name = newitems.name
    newObj.capital = newitems.capital
    newObj.region = newitems.region
    newObj.subregion = newitems.subregion
    newObj.population  = newitems.population
    newObj.languages = newitems.languages
    newObj.translations = newitems.translations
    newObj.acronym =  newitems.acronym
    newObj.currencies = newitems.currencies
    newObj.flag = newitems.glag

    return newObj
})
// console.log(newarr)

Country.remove({})
.then(start=>{
    Country.collection.insert(newarr)
}).then(data=>{console.log(data)})



