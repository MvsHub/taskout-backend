const { Router } = require('express');
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = Router();

// POST /transactions
router.post('/', authMiddleware, transactionController.createTransaction);

// GET /transactions
router.get('/', authMiddleware, transactionController.listTransactions);

module.exports = router;
