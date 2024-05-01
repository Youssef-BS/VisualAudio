// models/Subcategory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Category = require('./Category');
const Subcategory = require('./Subcategory');

const SubSubcategory = sequelize.define('SubSubcategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

});


module.exports = SubSubcategory;
