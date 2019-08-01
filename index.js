
//add dependencies

let express =require("express")
let bodyParser = require("body-parser")


//Create App

let app = express()
 //use body parser to format to JSON

app.use(bodyParser.json()) 

//add routes

//adding country route
let countryroute = require("./routes/countryroute")

app.use(countryroute)

// //add currency route
// let currencyroute = require("./routes/currenciesroute")

// app.use(currencyroute)


// //add language route

// let languageroute = require("./routes/languageroute")

// app.use(languageroute)

// //add translation
// let translationroute = require("./routes/translationroute")

// app.use(translationroute)


//handle 404 errors

app.use((req, res, next) => {
    res.status(404).send("There is an error")
})

//handle 500 errors

app.use((err, req, res, next) => {
    console.error(err.stack)
})

//listen to PORT  //runn what is assigned on Heroku or run on 3000
const PORT = process.env.PORT || 3000

//app is listening if the port gets a request
app.listen(PORT,() => console.info(`Running on ${PORT}`))