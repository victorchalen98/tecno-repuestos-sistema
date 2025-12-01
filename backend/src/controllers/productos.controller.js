// backend/src/controllers/productos.controller.js
export function crearProductoController(req, res) {
  const { nombre, stock } = req.body;
  if (!nombre || stock === undefined) 
    return res.status(400).json({ mensaje: "Datos incompletos" });
  
  return res.status(201).json({ mensaje: "Producto creado correctamente" });
}

