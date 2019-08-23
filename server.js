require("dotenv").config();

var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
// static files
// app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// routes
require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);



// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});