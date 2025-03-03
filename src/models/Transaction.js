// src/models/Transaction.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false }, // 'income' ou 'expense'
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  transaction_date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
});

module.exports = Transaction;
