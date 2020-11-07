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
    this.belongsTo(models.Grupo, {
      foreignKey: 'grupo_id'
    });
  }
}

module.exports = Criterio;