//importamos servidor
const express = require("express");
//importamos Mongoose
const mongoose = require("mongoose");
//importamos router
const router = require("./routers/index");
//importar body parser
const bodyParser = require("body-parser");
//importamos variables de entorno
require("dotenv").config({path: "variables.env"});
//importamos libreria para manejar rutas
const path = require("path");
//creamos servidor
const app = express();
//conectamos a mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Brandon12:perropu1205@cluster0.oibjm.mongodb.net/Carro_Traccion_Doble", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
});
//habilitamos body parser que permite leer los parametros en las peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//habilitamos Pug
app.set("view engine", "pug");
//Añadimos las vistas
app.set("views", path.join(__dirname, ("./views")));
//llamamos router configurado
app.use("/", router());
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4000;
//iniciamos servidor
app.listen(port, host, function() {
    console.log("Servidor iniciado");
});

