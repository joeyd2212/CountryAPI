const Currencies = require("../models/Currencies")

module.exports = {
    index: function (req, res) {
        Currencies.find({}).then(currency => res.json(currency));
    },
    show: function(req, res) {
        Currencies.findById(req.params.id).then(currency => res.json(currency));   
    }
  
    
};