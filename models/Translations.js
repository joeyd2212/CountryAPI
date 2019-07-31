

const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const TranslationsSchema = new Schema ({
    de: String,
    es: String,
    fr: String,
    ja: String,
    it: String,
    br: String,
    pt: String,
    nl: String,
    hr: String,
    fa: String

});

module.exports = mongoose.model("Translations", TranslationsSchema) 