var db = require("../models");

module.exports = function(app) {
    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(ans => {
            res.json(ans);
        })
    })
}