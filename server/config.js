const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize('e-shop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // <-- Provide the appropriate dialect here
  // Additional options...
});

module.exports = sequelize;
