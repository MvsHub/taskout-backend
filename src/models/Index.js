// src/models/index.js
const User = require('./User');
const Transaction = require('./Transaction');

// Definir as associações aqui
User.hasMany(Transaction, { foreignKey: 'userId' });
Transaction.belongsTo(User, { foreignKey: 'userId' });

// Exporte tudo junto
module.exports = {
  User,
  Transaction
};
