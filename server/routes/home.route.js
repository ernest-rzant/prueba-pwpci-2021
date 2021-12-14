// 1.- Importando el enrutador de EXpress
import { Router } from "express";
// Importando el modulo Path de node
// para trabajar con rutas absolutas
import path from 'path';

// Importando Helper
import { ROOT_DIR } from "../helpers/path.helper.js";

// Importando el acceso a los datos
import { products } from "./admin.route.js";

// 2.- Crear una instancia del enrutador
const router = Router();

// Se debe colocar primero  ya que el orden de registro
// determina el orden de verificacion
router.get('/about', (_, res) => {
    console.log("📓 Sirviendo recurso: 'about.html'");
    res.render('about');
});

// La ruta raiz entra en todo tipo de peticion
router.get(['/', '/home'], (_, res) => {
    console.log(`📔 Inventario de productos: ${JSON.stringify(products)}`);
    console.log("📓 Sirviendo recurso: 'shop.html'");
    res.render('shop');
});

// Exportando el router de la subruta de home
export default router;