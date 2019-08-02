const country = require("../models/Country")

module.exports = {
    index: function (req, res) {
        Country.find({}).then(country => res.json(country));
    },
    create: function(req, res) {
        Country.create(req.body).then(country => res.json(country));
    },
    show: function(req, res) {
        Country.findByName(req.params.name).then(country => res.json(country));   
    },
    update: function(req, res) {
        Country.findOneAndUpdate(
        { name: req.params.name },
        req.body,
        queryOptions
      ).then(country => res.json(country));
    },
    destroy: function(req, res) {
        Country.findByNameAndRemove(req.params.id).then(country =>
        res.send(country)
      );
    }  
    
};