

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

Country.deleteMany({})
    .then(_ => {
        Country.collection.insert(countries)
            .then(countries => {
                console.log(countries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    }).then(() =>{
        //mapping through language data
        
        var lang =language.map(newthing => {
            let newlangg ={}
            newlangg.name = newthing.name
            newlangg.nativeName = newthing.nativeName
        })
        
        Languages.deleteMany({})
            .then(_ => {
                Languages.collection.insert(language)
                    .then(language => {
                        console.log(language)
                        process.exit()
                    })
            })
            .catch(err => {
                console.log(err)
            })


        }).then(
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

    ).catch(e => console.log(e))







//seeding currency data














           

