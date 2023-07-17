import mongoose from "mongoose"

const conectarDB = async ()=>{
    try {
        const conexionDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        const url = `conectado a MoongoDB en el server ${conexionDB.connection.host} - en puerto: ${conexionDB.connection.port}`
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(1)
    }
}

export default conectarDB