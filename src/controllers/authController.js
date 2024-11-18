// src/controllers/authController.js
const login = (req, res) => {
    // Lógica de login
    res.json({ message: 'Login exitoso' });
  };
  
  const register = (req, res) => {
    // Lógica de registro
    res.json({ message: 'Registro exitoso' });
  };
  
  module.exports = { login, register };
  