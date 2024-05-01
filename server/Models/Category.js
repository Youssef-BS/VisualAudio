const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Market = require('./Market');
const Subcategory = require("./Subcategory")

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marketId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Market, // Reference the Market model
      key: 'id' // Name of the referenced column in the Market model
    }
  }
  
});

// Define association after Market model is required

module.exports = Category;