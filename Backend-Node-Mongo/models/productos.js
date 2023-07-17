import mongoose from "mongoose";

const productosShema = mongoose.Schema({
    nombre: {
        type: String,
        required:true,
        trim:true,
    },
    imagen: {
        type: String,
        required:true,
        trim:true,
    },
    descripcion: {
        type: String,
        required:true,
        trim:true,
    },
    stock: {
        type: Number,
        required:true,
        trim:true,
    },
},{
    timestamps:true,
})

const Productos = mongoose.model("productos",productosShema)

export default Productos