//importamos el modelo
const { restart } = require("nodemon");
const DatosCarro = require("../models/DatosCarro");
//acceder a los datos desde otro script
exports.crearDato = async function(req, res, next){
    try{
        const carro = new DatosCarro(req.body);
        await carro.save();   //guardar datos del carro en la base de datos mongo
        res.send("dato creado");
    } catch(error){
        console.log(error);
        next();
    }
}
//actualizar los datos del modelo creado
exports.actualizarDato = async function(req, res, next){
    try{
        const carro = await DatosCarro.findOneAndUpdate({_id: req.params._id}, req.body, {new: true});
        res.json(carro);                
    } catch(error){
        console.log(error);
        next();
    }
}

exports.obtenerDato = async function(req, res, next){
    try{
        const carro = await DatosCarro.findById(req.params._id);
        res.json(carro);                
    } catch(error){
        console.log(error);
        next();
    }
}

