import Categoria from "../models/categorias.js";

const obtenerCtegorias = async (req,res)=>{
    try {
        const categorias = await Categoria.find()
        res.json(categorias)
    } catch (error) {
        console.log(error);
    }
}

const agregarCategoria = async (req,res) =>{
    const categoria = new Categoria(req.body)
    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria)
    } catch (error) {
        console.log(error);
    }

}

const borrarCategoria = async (req,res) =>{
    try {
        await Categoria.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.status(500)
        res.send({error:"categoria no existe"})
        console.log(error);
    }
}

const actualizarCategorias= async (req,res) => {
    try {
        const categoria = await Categoria.findOne({_id:req.params.id})
        if(req.body.Imagen){
            categoria.Imagen = req.body.Imagen
        }
        if(req.body.Nombre){
            categoria.Nombre = req.body.Nombre
        }

        if(req.body.Descripcion){
            categoria.Descripcion = req.body.Descripcion
        }

        await categoria.save()
        res.send(categoria)

    } catch (error) {
        res.status(404)
        res.status(500)
        res.send({error:"categoria no existe"})
        console.log(error);
    }
}

//Punto 1 del taller - Crear la ruta para obtener una sola categoria en apirestsuperartemis.

const seleccionarOneCategorie = async (req,res) =>{
    try {
        const categoria = await Categoria.findOne({_id:req.params.id})
        res.json(categoria)
    } catch (error) {
        res.status(404)
        res.status(500)
        res.send({error:"categoria no existe"})
        console.log(error);
    }
}

export {obtenerCtegorias,agregarCategoria,borrarCategoria,actualizarCategorias, seleccionarOneCategorie}