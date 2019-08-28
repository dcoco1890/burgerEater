var path = require("path");
var db = require("../models");

module.exports = function(app) {

    // index route loads view.html
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(answer => {
            var hbsO = {
                Burger: answer
            };
            res.render("index", hbsO);
        })
    });

};