// 1.- Importando el enrutador de EXpress
import { Router } from "express";

// 2.- Crear uns instancia del enrutador
const router = Router();

// Se debe colocar primero  ya que el orden de registro
// determina el orden de verificacion
router.get('/about', (_, res) => {
    // Registrar un mensaje en el log
    res.send("<h1>Acerca de ...</h1>\n Sitio inicial hecho con NodeJs");
});

// La ruta raiz entra en todo tipo de peticion
router.get(['/', '/home'], (_, res) => {
    // Registrar un mensaje en el log
    res.send("<h1>Mi App</h1>\n Bienvenido a este sitio");
});

// Exportando el router de la subruta de home
export default router;