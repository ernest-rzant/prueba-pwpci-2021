// 1.- Importando el enrutador de EXpress
import { Router } from "express";

// 2.- Crear uns instancia del enrutador
const router = Router();

// 3.- Registrar rutas a mi enrutador
// Sirve el formulario para agregar productos
// GET: /admin/add-product
router.get('/add-product', (_, res) => {
    res.send(`
    <form action="add-product" method="POST">
    <label for="productt-name">Nombre de producto</label>
    <input type="text" name="name" id="product-name">
    <button type="submit">Agregar producto</button>
    `);
});

// Procesa el formulario para agregar productos
// POST: /admin/add-product
router.post('/add-product', (req, res) => {
    // Desestructurando el body de la peticion
    const { body } = req;
    // Respondiendo en JSON el body
    res.json(body);
});

// Exportando el router de la subruta de admin
export default router;