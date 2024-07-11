const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('e-shop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
