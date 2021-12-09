// 1.- Importando el enrutador de EXpress
import { Router } from "express";
// Importando el modulo Path de node
// para trabajar con rutas absolutas
import path from 'path';

// 2.- Crear uns instancia del enrutador
const router = Router();

// Se debe colocar primero  ya que el orden de registro
// determina el orden de verificacion
router.get('/about', (_, res) => {
    const fileAbout = path.join(path.resolve(), "server", "views", "about.html");
    res.sendFile(fileAbout);
});

// La ruta raiz entra en todo tipo de peticion
router.get(['/', '/home'], (_, res) => {
    const filePath = path.join(path.resolve(), "server", "views", "shop.html");
    res.sendFile(filePath);
});

// Exportando el router de la subruta de home
export default router;