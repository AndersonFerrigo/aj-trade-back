const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true
  })
);

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });


// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to AJTrade application."});
});

require("./app/routes/register.routes")(app);
require("./app/routes/contato.routes")(app);
require("./app/routes/moradia.routes")(app);
require("./app/routes/pacotes.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}.`);
});

