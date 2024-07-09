const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance
const Product = require('./Products'); // Import the Product model
const Cart = require('./Cart');

const CartProduct = sequelize.define('CartProduct', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  CartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cart, // Reference the Market model
      key: 'id' // Name of the referenced column in the Market model
    }
  },
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product, // Reference the Market model
      key: 'id' // Name of the referenced column in the Market model
    }
  }
}, {
  sequelize,
  modelName: 'CartProduct',
  tableName: 'cart_products'
});

// Define associations

module.exports = CartProduct;
