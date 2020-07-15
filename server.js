const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081" 
};

app.use(cors(corsOptions));

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
const PORT = process.env.PORT || 3000;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}.`);
});

