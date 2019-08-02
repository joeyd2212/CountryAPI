const currency = require("../models/Currencies")

module.exports = {
    index: function (req, res) {
        currencies.find({}).then(currency => res.json(currency));
    },
    create: function(req, res) {
        currencies.create(req.body).then(currency => res.json(currency));
    },
    show: function(req, res) {
        currencies.findByName(req.params.name).then(currency => res.json(currency));   
    },
    update: function(req, res) {
        currencies.findOneAndUpdate(
        { name: req.params.name },
        req.body,
        queryOptions
      ).then(currency => res.json(currency));
    },
    destroy: function(req, res) {
        currencies.findByNameAndRemove(req.params.name).then(currency =>
        res.send(currency)
      );
    }  
    
};