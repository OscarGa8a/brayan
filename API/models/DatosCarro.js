//importamos Mongoose
const mongoose = require("mongoose");
//crear esquema para definir el modelo
const esquema = mongoose.Schema;
//Definimos el esquema
const datosCarro = new esquema({
    velocidadLineal: {
        type: Number,
        trim: true
    },
    posicionX: {
        type: Number,
        trim: true
    },
    posicionY: {
        type: Number,
        trim: true
    },
    anguloGiro: {
        type: Number,
        trim: true
    }

});
 //exportar modelos
module.exports = mongoose.model("Datos_carro", datosCarro);
