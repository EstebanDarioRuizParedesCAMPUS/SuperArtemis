import express from "express";

const router = express.Router()

import { obtenerClientes,seleccionarOneClient,agregarCliente,borrarCliente,actualizarCliente } from "../controllers/clientes.controller.js";

router.get("/all",obtenerClientes)
router.get("/search/:id",seleccionarOneClient)
router.post("/add",agregarCliente)
router.delete("/del/:id",borrarCliente)
router.patch("/upd/:id",actualizarCliente)

export default router