const { Router } = require('express');
const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('./database');

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333, function () {
  console.log("Running");
});