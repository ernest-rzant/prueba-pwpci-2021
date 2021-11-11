//1.- Importar el modulo http
import http from 'http';
import { platform } from 'os';

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer((req, res) => {
    // Obteniendo el recurso solicitado
    let { url, method } = req;

    // Informa en la consola del servidor que se recibe una peticion
    console.log(` 📮 Se ha solicitadoi el siguiente recurso: ${method} : ${url}`);

    // Filtrar la url
    if(url === '/'){
        // Respuesta ante "Get /"
        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');

        // 2. Escribiendo la respuesta
        res.write(`
        <html>
            <head>
                <title>Enter message</title>
            </head>
            <body>
                <h1>Send Message</h1>
                <form action="/message" method="POST">
                    <input type"text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
        `);

        // Cerrando conexion
        res.end();
        
    }else if (url === '/message' && method === "POST"){
        // 1.- Se crea una variable para guardar los datos de entrada
        let body = [];

        // 2.- Registrar un manejador para la entrada de los datos
        req.on("data", (chunk) => {
            // 2.1.- Registrando los trozos que llegan al backend
            console.log(chunk);

            // 2.2.- Acumulo los datos de entrada
            body.push(chunk);

            // 2.3.- Proteccion en caso de recepcion masiva de datos
            if (body.length > 1e6) req.socket.destroy();
        })
        // 3.- REgistrando un manejador de fin de recepcion de datos
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            // Estableciendo el tipo de retorno
            // como HTML
            res.setHeader('Content-Type', 'text/html');
            res.write(`
            <html>
                <head>
                <title>Received message</title>
                </head>
            <body>
                <h1>Received Message</h1>
                <p>Thank you!!</p>
                <p>The mesaage we received was this: ${message}</p>
            </body>
            </html>
            `);

            // Finalizo la conexion
            return res.end();
            
        })

    } else if(url === '/author'){
        // Respuesta ante "Get /"    
        // 1. Estableciendo el tipo de retorno    
        // como HTML    
        res.setHeader('Content-Type', 'text/html');
        let url_image = 'https://avatars.githubusercontent.com/u/92902557?v=4';
        
        // 2. Escribiendo la respuesta    
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body>');
        res.write('<h1>&#9889; Author &#9889;</h1>');
        res.write('<p>Ernesto Rodriguez Antunez - Web Developer</p>');
        res.write(`<img width="300px" src="${url_image}" alt="Foto Ernest Rodriguez">`);
        res.write('</body>');
        res.write('</html>');
        
        // Cerrando conexion    
        res.end();
    
    }else{
        // Se registra el Recurso no encontrado
        // Recurso no encontrado
        console.log(`❌ No se ha encontrado el recurso: ${url}`);

        // 1. Estableciendo el tipo de retorno
        // como HTML
        res.setHeader('Content-Type', 'text/html');

        // Escribiendo la respuesta
        res.write("<html>");
        res.write("<head><title>My App</title></head>");
        res.write(`<body><h1>Error: 404 ~ Recurso no encontrado</h1></body>`);
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
    console.log("Servidor escuchando en http://0.0.0.0:3000");
});
