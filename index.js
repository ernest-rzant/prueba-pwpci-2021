// 1.- Importar el modulo http
import http from 'http';
import { platform } from 'os';

// 2.- Importando el module de routes
import routes from './routes.js';

// 3.- Importando express
import Express from 'express';

// Crear instancia de Express
const app = Express();  // (req, res, next) => {} event handler

// 2.- Crear el servidor tomando como
// manejador de peticiones a express
const server = http.createServer(app);

// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.66:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en http://0.0.0.0:3000");
});
