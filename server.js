const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/primoendpoint", (richiesta, risposta) => {
  risposta.json({ messaggio: "La mia prima chiamata!" });
});

// seconda chiamata
app.get("/secondoendpoint", (richiesta, risposta) => {
  risposta.json({ messaggio: "La mia seconda chiamata!" });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Daje, il mio server è partito nella porta 3000!");
});