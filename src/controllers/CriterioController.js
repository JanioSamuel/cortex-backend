const Criterio = require('../models/Criterio');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');

module.exports = {
  async store(req, res) {
    const params = {
      id: uuidv4(),
      criterio: req.body.criterio,
      tags: req.body.tags.replace(' ', '')
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
    try {
      if (tag) {
        const response = await Criterio.findAndCountAll({
          where: {
            tags: {
              [Op.like]: `%${tag.toLowerCase()}%`
            }
          },
          order: [['created_at', 'DESC']]
        });
        return res.json({ dataValues: response.rows.map(r => r.dataValues), count: response.count });
      } else {
        const response = await Criterio.findAndCountAll({
          order: [['created_at', 'DESC']]
        });
        return res.json({ dataValues: response.rows.map(r => r.dataValues), count: response.count });
      }
    } catch (err) {
      return res.send(err);
    }
  }
}