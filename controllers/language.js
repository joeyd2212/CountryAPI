const Language = require("../models/Language")

module.exports = {
    index: function (req, res) {
        Language.find({}).then(language => res.json(language));
    },
    show: function(req, res) {
        Language.findById(req.params.id).then(language => res.json(language));   
    }
   
    
};