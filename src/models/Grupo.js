const { Model, DataTypes } = require('sequelize');
class Grupo extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Grupo'
    });
  };
  static associate(models) {
    this.hasMany(models.Criterio, {
      foreignKey: 'grupo_id'
    });
  }
};


module.exports = Grupo;