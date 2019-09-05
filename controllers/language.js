const Language = require("../models/Language")

module.exports = {
    index: function (req, res) {
        Language.find({}).then(language => res.json(language)).catch(err=>err)
    },
    show: function(req, res) {
        Language.findById(req.params.id).then(language => res.json(language)).catch(err=>err)   
    }
   
    
};