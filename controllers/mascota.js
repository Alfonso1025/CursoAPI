const Mascota = require('../models/Mascota')
const Usuario = require('../models/Mascota')

function crearMascota(req, res){

    var mascota = new Mascota(req, body)
    res.status(201).send(mascota)
}

function obtenerMascota(req, res){
    var mascota1= new Mascota(1, "firulais", "perro", " ", "ESTE PERRO ES GRANDE")
    var objet = [{
        id:1,
        nombre:'hola'
    }];

    var mascota2 = new Mascota(2, "bigotes", "gato","blanco")
    res.send([mascota1, mascota2])
}

function modificarMascota(req, res){

    var mascota1= new Mascota(req.params,id, "firulais", "perro", "grande")
    var modificaciones= req.bod
    mascota1= {...mascota1, ...modificaciones}
    res.send(mascota1)
}

function eliminarMascota(req, res){
    res.status(200).send("Mascota ${req.params.id}eliminado");

}
module.exports = {
    crearMascota,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
}