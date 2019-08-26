const Language = require("../models/Language")

module.exports = {
    index: function (req, res) {
        Language.find({}).then(language => res.json(language));
    },
    create: function(req, res) {
        Language.create(req.body).then(language => res.json(language));
    },
    show: function(req, res) {
        Language.findById(req.params.id).then(language => res.json(language));   
    },
    update: function(req, res) {
        Language.findOneAndUpdate(
        { name: req.params.name },
        req.body,
       
      ).then(language => res.json(language));
    },
    destroy: function(req, res) {
        Language.findByIdAndDelete(req.params.id).then(language =>
        res.send(language)
      );
    }  
    
};