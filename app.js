// Importar express
const express = require('express');

// Crear una aplicación de express
const app = express();

// Definir el puerto
const port = 3000;

app.use(cors({
  origin: 'https://apex.oracle.com', // Especifica el dominio permitido o usa '*' para permitir todos.
}));

// Ruta GET en /prueba que devuelve un JSON
app.get('/prueba', (req, res) => {
  res.json({
    status: 200,
    message: "Prueba"
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
