// 1.- Importar el modulo http
import http from 'http';
import { platform } from 'os';

// 2.- Importando el module de routes
import routes from './routes.js';

// 3.- Importando express
import Express from 'express';

// Crear instancia de Express
const app = Express();  // (req, res, next) => {} event handler

// Se debe colocar primero  ya que el orden de registro
// determina el orden de verificacion
app.use('/about', (_, res) => {
    // Registrar un mensaje en el log
    console.log('Se ha realizado la peticion: "/about"');
    res.send("<h1>Acerca de ...</h1>\n Sitio inicial hecho con NodeJs");
});

// La ruta raiz entra en todo tipo de peticion
app.use(['/', '/home'], (_, res) => {
    // Registrar un mensaje en el log
    console.log('Se ha realizado la peticion: "/"');
    res.send("<h1>Mi App</h1>\n Bienvenido a este sitio");
});

// Poniendo a escuchar la app express
app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en http://0.0.0.0:3000");
});
