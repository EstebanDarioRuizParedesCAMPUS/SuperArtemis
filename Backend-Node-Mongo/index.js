import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/config.js"
import categoriasRouter from "./routes/categorias.routes.js"
import clientesRouter from "./routes/clientes.routes.js"
import empleadosRouter from "./routes/empleados.routes.js"
import productosRouter from "./routes/productos.routes.js"

const app = express()

app.use(express.json())

dotenv.config()

app.use("/categorias",categoriasRouter)
app.use("/clientes",clientesRouter)
app.use("/empleados",empleadosRouter)
app.use("/productos", productosRouter)

const port = process.env.PORT

conectarDB();

app.listen(port, ()=>{
    console.log(`Server web listening on port ${port}` );
})

