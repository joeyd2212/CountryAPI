
//add dependencies

let express =require("express")
let bodyParser = require("body-parser")


//Create App

let app = express()
 //use body parser to format to JSON

app.use(bodyParser.json()) 

//add routes

//adding rcountry route
let countryroute = require("./routes/countryroute")

app.use(countryroute)

//add currency route


//add language route

//add translation



//handle 404 errors

app.use((req, res, next) => {
    res.status(404).send("There is an error")
})

//handle 500 errors

app.use((error, req, res, next) => {
    console.error(err.stack)
})

//listen to PORT  //runn what is assigned on Heroku or run on 3000
const PORT = process.env.PORT || 3000

//app is listening if the port gets a request
app.listen(PORT,() => console.info(`Running on ${PORT}`))