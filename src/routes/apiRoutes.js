// src/routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// Controladores de la API
const { consultar } = require('../controllers/apiController');

// Ruta de consulta
router.get('/consultar', consultar);

module.exports = router;
