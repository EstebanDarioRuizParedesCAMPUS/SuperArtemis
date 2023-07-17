import express from "express";

const router = express.Router()

import {getEmpleados,getOneEmpleado,agregarEmpleado,borrarEmpleado,actualizarEmpleado} from "../controllers/empleados.controller.js"

router.get("/all",getEmpleados )
router.get("/search/:id", getOneEmpleado)
router.post("/add", agregarEmpleado)
router.delete("/del/:id", borrarEmpleado)
router.patch("/upd/:id", actualizarEmpleado)

export default router