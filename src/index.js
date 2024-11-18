// src/index.js
const express = require('express');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Importar las rutas
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/', authRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
