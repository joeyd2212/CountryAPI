
//add dependencies
let express =require("express")
let bodyParser = require("body-parser")



//Create App
let app = express()

 //use body parser to format to JSON

app.use(bodyParser.json()) 




app.get("/",(req, res) =>{
    res.send("Peter Piper Picked")
})

app.use("/api/country",require("./routes/countryroute"));





//listen to PORT  //runn what is assigned on Heroku or run on 3000
const PORT = process.env.PORT || 3000

//app is listening if the port gets a request
app.listen(PORT,() => console.info(`Running on ${PORT}`))