const language = require("../models/Language")

module.exports = {
    index: function (req, res) {
        Language.find({}).then(language => res.json(language));
    },
    create: function(req, res) {
        Language.create(req.body).then(language => res.json(languagey));
    },
    show: function(req, res) {
        Language.findByName(req.params.name).then(language => res.json(language));   
    },
    update: function(req, res) {
        Language.findOneAndUpdate(
        { name: req.params.name },
        req.body,
        queryOptions
      ).then(language => res.json(language));
    },
    destroy: function(req, res) {
        Language.findByNameAndRemove(req.params.id).then(language =>
        res.send(language)
      );
    }  
    
};