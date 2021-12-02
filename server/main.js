// Importando express
import Express from 'express';

// Importar enrutadores
import adminRoute from './routes/admin.route.js';
import homeRoute from './routes/home.route.js';

console.log(`Variable de entorno: ${process.env.NODE_ENV}`);

// Crear instancia de Express
const app = Express();  // (req, res, next) => {} event handler

// 1.- Insertando Middleware para la lectura de datos
// desde un cliente
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req, _, next) => {
    console.log(`=> Se ha realizado la peticion: "${req.method} : ${req.path}"`);
    next();
});

// Se agrega a la apliacion la ruta admin
app.use('/admin', adminRoute);

// Se agrega a la apliacion la ruta home
app.use(homeRoute);

// Poniendo a escuchar la app express
app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en http://0.0.0.0:3000");
});
