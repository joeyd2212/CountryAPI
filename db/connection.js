
const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost:27017/countries_db";
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = mongoose;


