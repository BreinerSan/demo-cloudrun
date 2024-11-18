// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Controladores de autenticación
const { login, register } = require('../controllers/authController');

// Ruta de login
router.post('/login', login);

// Ruta de registro
router.post('/register', register);

router.get('/', (req, res) => {
    return res.status(200).send('Running');
});

module.exports = router;
