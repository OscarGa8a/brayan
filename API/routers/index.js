//importamos servidor
const express = require("express");
//importar Router Express
const router = express.Router();
//importamos controlador
const controladorCarro = require("../controllers/controladorCarro");
//Exportamos router
module.exports = function() {
    //Obtener datos
    router.get("/", function(req, res, next) { //creamos pagina
        res.render("index");
    });
    //Agrega modelo de los datos
    router.post("/datos", controladorCarro.crearDato);
    //Actualiza modelo de los datos
    router.put("/datos/:_id", controladorCarro.actualizarDato);
    //Obtener modelo de los datos
    router.get("/datos/:_id", controladorCarro.obtenerDato);


    return router;
}