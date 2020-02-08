const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
const exphbrs = require("express-handlebars");
const routes = require("./controllers/burgerController");


app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost" + PORT);
});