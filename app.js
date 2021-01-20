
//configuracion de variables de la app
var express = require('express'),
    bodyParser = require("body-parser"),
    cors = require("cors");

//objeto global de la pp
var app = express();
//configuracion de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//conexion a base de datos
var {database} = require("./config/credentials")

//rutas de la aplicacion
app.use('/v1', require('./routes'));

// configuracion de error
app.use(function (req, res, next) {
    var err = new Error("No encontramos nada");
    err.status = 404;
    next(err);
});

//iniciando el servidor
var server = app.listen(process.env.Port || 3000, function () { console.log("Escuchando en el puerto" + server.address().port) })


