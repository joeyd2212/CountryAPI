
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;






const CurrenciesSchema = new Schema ({
    code: String,
    name: String,
    symbol: String

});

module.exports = mongoose.model("Currencies", CurrenciesSchema) 