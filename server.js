const express = require('express');
const routes = require('./Services/routes');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

routes.assignRoutes(app);