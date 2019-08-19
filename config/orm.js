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
    }
}

module.exports = orm;