const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./Services/routes');
const PORT = 8080;
const HOST = '0.0.0.0';
const connectDb = require('./Database/mongoDB');
const app = express();

app.use(bodyParser.json());

// app.listen(PORT, HOST);

app.listen(PORT,HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
    connectDb().then(() => {
      console.log("MongoDb connected");
    });
});

app.use(cors());

// console.log(`Running on http://${HOST}:${PORT}`);

routes.assignRoutes(app);