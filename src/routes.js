const express = require('express');
const CriterioController = require('./controllers/CriterioController');

const routes = express.Router();
routes.get('/criterio', CriterioController.index);
// routes.get('/buscar', CriterioController.index);
routes.post('/criterio', CriterioController.store);

module.exports = routes;