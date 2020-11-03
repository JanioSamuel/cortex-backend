const { Model, DataTypes } = require('sequelize');
class Criterio extends Model {
  static init(sequelize) {
    super.init({
      criterio: DataTypes.STRING,
      tags: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Criterio',
    })
  }
  static associate(models) {
    // define association here
  }
}

module.exports = Criterio;