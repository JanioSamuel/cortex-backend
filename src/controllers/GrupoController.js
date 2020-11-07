const Grupo = require('../models/Grupo');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async store(req, res) {
    const params = {
      id: uuidv4(),
      nome: req.body.nome
    }

    try {
      const response = await Grupo.create(params);
      return res.json(response.dataValues);
    } catch (err) {
      return res.send(err);
    }

  },

  async index(req, res) {
    const response = await Grupo.findAll();
    return res.json(response.map(r => r.dataValues));
  }
}