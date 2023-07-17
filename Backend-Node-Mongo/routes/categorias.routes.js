import express from "express";

const router = express.Router()

import { obtenerCtegorias,agregarCategoria,borrarCategoria,actualizarCategorias,seleccionarOneCategorie } from "../controllers/categoria.controller.js";

router.get("/all", obtenerCtegorias)
router.post("/add", agregarCategoria)
router.delete("/del/:id",borrarCategoria)
router.patch("/upd/:id",actualizarCategorias)
router.get("/search/:id",seleccionarOneCategorie)

export default router