const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/countries_db", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/countries_db";
}
