const Criterio = require('../models/Criterio');
const Grupo = require('../models/Grupo');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

module.exports = {
  async store(req, res) {
    const params = {
      id: uuidv4(),
      criterio: req.body.criterio,
      tags: req.body.tags.replace(' ', ''),
      grupo_id: req.body.grupoId
    }

    try {
      const response = await Criterio.create(params);
      return res.json(response.dataValues);
    } catch (err) {
      return res.send(err);
    }

  },

  async index(req, res) {
    const tag = req.query.tag;
    const grupo = req.query.grupo;
    whereClause = {};
    if (tag) {
      whereClause['tags'] = { [Op.like]: `%${tag.toLowerCase()}%` };
    }
    if (grupo) {
      whereClause['grupo_id'] = grupo;
    }

    try {
      const response = await Criterio.findAndCountAll({
        where: whereClause,
        include: [Grupo],
        order: [['created_at', 'DESC']]
      });
      console.log(response);
      return res.json({ dataValues: response.rows.map(r => r.dataValues), count: response.count });
    } catch (err) {
      return res.send(err);
    }
  }
}