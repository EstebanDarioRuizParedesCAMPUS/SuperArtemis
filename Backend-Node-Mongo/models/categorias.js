import mongoose from "mongoose";

const categoriaShema = mongoose.Schema({
    Imagen: {
        type: String,
        required: true,
        trim:true,
    },
    Nombre: {
        type: String,
        required:true,
        trim:true,
    },
    Descripcion :{
        type: String,
        required:true,
        trim:true,  
    }
},
{
    timestamps: true,
})

const Categoria = mongoose.model("categorias",categoriaShema )

export default Categoria