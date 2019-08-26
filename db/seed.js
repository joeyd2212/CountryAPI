

const countries = require("./countries.json")
const Country = require("../models/Country")




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



           

