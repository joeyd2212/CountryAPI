
//add dependencies

let express =require("express")
let bodyParser = require("body-parser")


//Create App

let app = express()
 //use body parser to format to JSON

app.use(bodyParser.json()) 

// //add routes

// //adding country route
// let countryroute = require("./routes/countryroute")

// app.use(countryroute)

// // //adding currency route
// let currencyroute = require("./routes/currenciesroute")

// app.use(currencyroute)


// // //adding language route

// let languageroute = require("./routes/languageroute")

// app.use(languageroute)




// //handle 404 errors //bad request 

// app.use((req, res, next) => {
//     res.status(404).send("There is an error")
// })

// //handle 500 errors //internal server error

// app.use((err, req, res, next) => {
//     console.error(err.stack)
// })


app.get("/",(req, res) =>{
    res.send("Hello World")
})

app.use("/api/country",require("./routes/countryroute"));
app.use("/api/currency", require("./routes/currenciesroute"));
app.use("/api/language", require("./routes/languageroute"));




//listen to PORT  //runn what is assigned on Heroku or run on 3000
const PORT = process.env.PORT || 3000

//app is listening if the port gets a request
app.listen(PORT,() => console.info(`Running on ${PORT}`))