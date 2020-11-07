const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Criterio = require('../models/Criterio');
const Grupo = require('../models/Grupo');


const connection = new Sequelize(databaseConfig);

Criterio.init(connection);
Grupo.init(connection);

Criterio.associate(connection.models);
Grupo.associate(connection.models);

module.exports = connection;