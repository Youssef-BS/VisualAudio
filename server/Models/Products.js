// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance

const Product = sequelize.define('Product', {
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  // Define other attributes as needed
});

module.exports = Product;
