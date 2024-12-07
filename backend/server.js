const express = require('express');
const consultasRouter = require('./routes/consultas');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3002;

// Middleware
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Permite solicitudes el frontend
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
}));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// Rutas
app.use('/', consultasRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
