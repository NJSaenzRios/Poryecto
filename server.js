const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Archivos estaticos
app.use(express.static('public'));

//Ruta princial
app.get('/', (req, res) => {
res.send('<h1> ¡Hola, mundo! </h1><Aplicacion desplegada con CI/CD.</p>');    
});

//Iniciar el servidor

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});

