const express = require('express');
const consultasRouter = require('./routes/consultas');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api', consultasRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
