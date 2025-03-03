// src/controllers/transactionController.js
const { Transaction } = require('../models'); // Importa do index.js
// Se você quiser usar User também, pode fazer: const { User, Transaction } = require('../models');

exports.createTransaction = async (req, res) => {
  try {
    const { amount, type, description, category } = req.body;
    const userId = req.user.userId;

    // Agora Transaction é de fato o modelo Sequelize
    const transaction = await Transaction.create({
      amount,
      type,
      description,
      category,
      userId
    });

    return res.status(201).json({
      message: 'Transação criada com sucesso',
      transaction
    });
  } catch (error) {
    console.error('Erro ao criar transação:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

