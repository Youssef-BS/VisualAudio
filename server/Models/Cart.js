const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance
const User = require('./User')
const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  totale: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 1
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Reference the Market model
      key: 'id' // Name of the referenced column in the Market model
    }
  }
}, {
  sequelize,
  modelName: 'Cart',
  tableName: 'carts'
});

module.exports = Cart;
