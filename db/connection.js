var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/countries_db", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;