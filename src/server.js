const { Router } = require('express');
const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
require('./database');

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
// app.listen(process.env.PORT || 3333, function () {
//   console.log("Running, port: ", process.env.PORT);
// });