// server.js
const express = require('express');
const sequelize = require('./config');
const Product = require('./Models/Products');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Sequelize

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Sync the model with the database


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
