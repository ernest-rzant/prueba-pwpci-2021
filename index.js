//1.- Importar el modulo http
import http from 'http';
import { platform } from 'os';

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer((req, res)=>{
    // Informa en la consola del servidor que se recibe una peticion
    console.log("Se ha recibido una peticion.");

    // Registrar informacion de la peticion
    console.log("==>> Informacion de la peticion");
    console.log(`=> url: ${req.url}`);
    console.log(`=> Request Method: ${req.method}`);

    // Establecer el tipo de contenido que se entregara al cliente
    res.setHeader('Content-Type', 'text/html');

    // Envio el contenido
    res.write("<html>");
    res.write("<head><title>My App</title></head>");
    res.write(`<body><h1>Hello from the server ;)</h1><p style="color:red">Recurso solicitado: ${req.url}</p></body>`);
    res.write("</html>");

    // Terminar la conexion
    res.end();
});

// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.66:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
