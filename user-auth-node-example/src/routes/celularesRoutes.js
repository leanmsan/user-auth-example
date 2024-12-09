// src/routes/celularesRoutes.js

const express = require('express');
const router = express.Router();
const { addCelular, getCelulares } = require('../controllers/celularesController');
const authenticateSession = require('../services/sessionService');  // Lógica de autenticación de sesión

router.post('/celulares', authenticateSession, addCelular);
router.get('/celulares', authenticateSession, getCelulares);

module.exports = router;
