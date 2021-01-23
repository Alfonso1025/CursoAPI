const Usuario = require('../models/Usuario')

const pool = require("../config/db.js");

async function crearUsuario(req, res){

    var usuario = new Usuario(req.body)
    var respuesta = await pool.query('insert into usuarios set?', usuario);
    res.status(200).send(respuesta);
}

async function obtenerUsuarios(req,res){
    var resp2 = await pool.query("select * from usuarios");
    res.send(resp2)
}

function modificarUsuario(req, res){

    var usuario1= new Usuario(req.params,id, "juan", "Vega", "juan@vega.com")
    var modificaciones= req.bod
    usuario1= {...usuario1, ...modificaciones}
    res.send(usuario1)
}

function eliminarUsuario(req, res){
    res.status(200).send("Usuario ${req.params.id}eliminado");

}
module.exports = {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario
}