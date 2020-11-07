const express = require('express');
const CriterioController = require('./controllers/CriterioController');
const GrupoController = require('./controllers/GrupoController');

const routes = express.Router();
routes.get('/criterio', CriterioController.index);
routes.post('/criterio', CriterioController.store);
routes.get('/grupo', GrupoController.index);
routes.post('/grupo', GrupoController.store);

module.exports = routes;