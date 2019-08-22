var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
    name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    created_at: Sequelize.DATE
});

Burger.sync();

module.exports = Burger;