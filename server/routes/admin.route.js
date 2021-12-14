// 1.- Importando el enrutador de EXpress
import { Router } from "express";

// Importando el modulo Path de node
// para trabajar con rutas absolutas
import path from 'path';

// Importando Helper
import { ROOT_DIR } from "../helpers/path.helper.js";

// Base de datos volatil
export const products = [];

// 2.- Crear uns instancia del enrutador
export const router = Router();

// 3.- Registrar rutas a mi enrutador
// Sirve el formulario para agregar productos
// GET: /admin/add-product
router.get('/add-product', (_, res) => {
    console.log("📓 Sirviendo recurso: 'add-product.html'");
    res.render('add-product');;
});

// Procesa el formulario para agregar productos
// POST: /admin/add-product
router.post('/add-product', (req, res) => {
    // Desestructurando el body de la peticion
    const { name } = req.body;
    // Guarda en la base de datos el nombre del producto
    products.push({name});
    // Redireccionando a la pantalla principal
    res.redirect('/')
});

// Exportando el router de la subruta de admin
//export default router;