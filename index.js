
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
app.use("/api/currency",require("./routes/currenciesroute"))
app.use("/api/language", require("./routes/languageroute"))


//listen to PORT  //run what is assigned on Heroku or run on 3000
// const PORT = process.env.PORT || 3000

// //app is listening if the port gets a request
// app.listen(PORT,() => console.info(`Running on ${PORT}`))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});