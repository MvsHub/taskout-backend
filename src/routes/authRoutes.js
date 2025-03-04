const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

// Rota para registrar um novo usuário
router.post('/register', authController.register);

// Rota para login do usuário
router.post('/login', authController.login);

module.exports = router;
