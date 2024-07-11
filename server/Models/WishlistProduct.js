const { DataTypes } = require('sequelize');
const sequelize = require('../config'); // Import your Sequelize instance
const Product = require('./Products'); // Import the Product model
const Cart = require('./Cart');
const Wishlist = require('./Wishlist');

const WishlistProduct = sequelize.define('WishlistProduct', {
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
  WishlistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Wishlist, // Reference the Market model
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
  modelName: 'WishlistProduct',
  tableName: 'Wishlist_products'
});

// Define associations

module.exports = WishlistProduct;
