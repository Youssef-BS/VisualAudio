const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aaa', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
