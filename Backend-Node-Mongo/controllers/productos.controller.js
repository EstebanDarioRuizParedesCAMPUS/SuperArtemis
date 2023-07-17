import Productos from "../models/productos.js";

const obtenerProductos = async (req,res) =>{
    try {
        const productos = await Productos.find()
        res.json(productos)
    } catch (error) {
    console.log(error);        
    }
}

const obtenerUnProducto = async (req,res) =>{
    try {
        const producto = await Productos.findOne({_id:req.params.id})
        res.json(producto)
    } catch (error) {
        console.log(error);
        res.status(500)
        res.status(404)
        res.send({error:"Producto no existe"})
    }
}

const agregarProducto = async (req,res) => {
    const producto = new Productos(req.body)
    try {
        const nuevoProducto = await producto.save()
        res.json(nuevoProducto)
    } catch (error) {
        console.log(error);
    }
}

const borrarProducto = async (req,res) =>{
    try {
        await Productos.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        console.log(error);
        res.status(500)
        res.status(404)
        res.send({error:"Producto no existe"})
    }
}

const actualizarProducto = async (req,res) =>{
    try {
        const producto = await Productos.findOne({_id:req.params.id})
        if(req.body.nombre){
            producto.nombre = req.body.nombre
        }
        if(req.body.imagen){
            producto.imagen = req.body.imagen
        }
        if(req.body.descripcion){
            producto.descripcion = req.body.descripcion
        }
        if(req.body.stock){
            producto.stock = req.body.stock
        }
        if(req.body.Circulacion){
            producto.Circulacion = req.body.Circulacion
        }
        if(req.body.compania){
            producto.compania = req.body.compania
        }
        await producto.save()
        res.send(producto)
    } catch (error) {
        console.log(error);
        res.status(500)
        res.status(404)
        res.send({error:"Producto no existe"})
    }
}

export {obtenerProductos,obtenerUnProducto,agregarProducto,borrarProducto,actualizarProducto}