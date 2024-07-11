const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Gallery = require('./Gallery');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Project.hasMany(Gallery, { as: 'gallery' });

module.exports = Project;
