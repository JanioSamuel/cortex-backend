const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Criterio = require('../models/Criterio');


const connection = new Sequelize(databaseConfig);

Criterio.init(connection)

module.exports = connection;