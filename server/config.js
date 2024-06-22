const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize('e-shop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
  
});

module.exports = sequelize;
