import express from "express"

const router = express.Router()

import {obtenerProductos,obtenerUnProducto,agregarProducto,borrarProducto,actualizarProducto} from "../controllers/productos.controller.js"

router.get("/all", obtenerProductos )
router.get("/search/:id", obtenerUnProducto )
router.post("/add", agregarProducto)
router.delete("/del/:id", borrarProducto)
router.patch("/upd/:id", actualizarProducto)

export default router