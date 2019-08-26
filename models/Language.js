
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;




const LanguageSchema = new Schema ({
    name: String,
    nativeName: String

});


module.exports = mongoose.model("Language", LanguageSchema) 