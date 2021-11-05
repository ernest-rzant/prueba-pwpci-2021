//1.- Importar el modulo http
import http from 'http';
import { platform } from 'os';

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer((req, res)=>{
    // Obteniendo el recurso solicitado
    let { url, method } = req;

    // Informa en la consola del servidor que se recibe una peticion
    console.log(`Se ha solicitadoi el siguiente recurso: ${method} : ${url}`);

    // Filtrar la url
    if(url === '/'){
        // Respuesta ante "Get /"
        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');

        // 2. Escribiendo la respuesta
        res.write("<html>");
        res.write("<head><title>My App</title></head>");
        res.write(`<body><h1>Hello from the server ;)</h1></body>`);
        res.write("</html>");

        // Cerrando conexion
        res.end();
    }else{
        // Se registra el Recurso no encontrado
        // Recurso no encontrado
        console.log(`No se ha encontrado el recurso: ${url}`);

        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');

        // Escribiendo la respuesta
        res.write("<html>");
        res.write("<head><title>My App</title></head>");
        res.write(`<body><h1>Error: 404 ~ Recurso no enconmtrado</h1></body>`);
        res.write("</html>");

        // Cerrando conexion
        res.end();
    }
});

// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.66:3000
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
