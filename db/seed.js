

const countries = require("./countries.json")
const Country = require("../models/Country")

const currency = require("./currencies.json")
const Currencies = require("../models/Currencies")

const language = require("./languages.json")
const Languages = require("../models/Language")




//mapping through the country data to get properties i want
var newarr = countries.map(newitems => {
    let newObj = {}
    newObj.name = newitems.name
    newObj.capital= newitems.capital
    newObj.region = newitems.region
    newObj.subregion = newitems.population
    newObj.languages = newitems.languages
    newObj.currencies=  newitems.currencies
    newObj.flag = newitems.flag
    
    

    return newObj
})





















Currencies.deleteMany({})
    .then(_ => {
        Currencies.collection.insert(currency)
            .then(currency => {
                console.log(currency)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })












           

