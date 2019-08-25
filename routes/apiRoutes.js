var db = require("../models");

module.exports = function(app) {
    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(ans => {
            res.json(ans);
        })
    });
    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            name: req.body.name,
            devoured: req.body.devoured
        }).then(answer => {
            res.json(ans);
        })
    });
    app.delete("/api/burgers/:id", function(req, res) {

        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(ans => {
            res.render("index", { Burger: answer });
        })
    })
}