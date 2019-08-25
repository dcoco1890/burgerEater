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
            res.json(answer);
        })
    });
    app.delete("/api/burgers/:id", function(req, res) {

        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(answer => {
            res.render("index", { Burger: answer });
        })
    });
    app.put("/api/burgers/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(answer => {
            res.json(answer);
        })
    })
}