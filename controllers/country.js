const Country = require("../models/Country")

module.exports = {
    index: function (req, res) {
        Country.find({}).then(country => res.json(country)).catch(err=>err)
    },
    create: function(req, res) {
        Country.create(req.body).then(country => res.json(country)).catch(err=>err)
    },
    show: function(req, res) {
        Country.findById(req.params.id).then(country => res.json(country)).catch(err=>err)
    },
    update: function(req, res) {
        Country.findOneAndUpdate(
        { name: req.params.name },
        req.body,
       
      ).then(country => res.json(country)).catch(err=>err)
    },
    destroy: function(req, res) {
        Country.findByIdAndDelete(req.params.id).then(country =>
        res.send(country).catch(err=>err)
      );
    }  
    
};