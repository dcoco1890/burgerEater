var connection = require("../config/connection.js");

// * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

var orm = {
    all: function(table, cb) {
        var q = `SELECT * FROM ${table}`;
        connection.query(q, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var q = `INSERT INTO ${table} (${cols}) VALUES ${vals}`;
        connection.query(q, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    update: function(table, id, cb) {
        var q = `UPDATE ${table} SET devoured = true WHERE id = ${id}`;
        connection.query(q, function(error, results) {
            if (error) throw error;
            cb(results);
        });
    }

}

module.exports = orm;