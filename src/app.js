// src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const celularesRoutes = require('./routes/CelularesRoutes');  // Rutas de celulares

const app = express();
const config = require('./config/config');

app.use(bodyParser.json());
app.use(cookieParser());

// Usar las rutas de celulares
app.use(celularesRoutes);

app.listen(config.port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});
