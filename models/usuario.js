//importando mongoose
// const mongoose = require ("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");

// importando modulo crypto pendiente de instalar
 // const crypto = require("crypto");

// importando jsonwebtoken pendiente de instalar

// const jwt = require("jsonwebtoken");

//esto no se que sea
// const secret = require("../config").secret;
/* 
const UsuarioShema = new mongoose.Shema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "no pueede estar vacio"],
        index: true,
          },
    nombre:{type: String, required: true},
    apellido: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "no puede estar vacio"],
        index: true,},
    //password: String,
    ubicacion: String,
    telefono: String,
    bio: String,
    foto: String,
    tipo: {type:String, enum: ["normal", "anunciante"]},
    hash: String,
    salt: String,
      },
 {timestamps: tue}
);

UsuarioShema.plugin(uniqueValidator, {message: "ya existe"});

UsuarioShema.methods.crearPassword = function (password){
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto
    .pbkdf25ync(password, this,salt, 10000, 512, "sha512")
    .toString("hex");
};

UsuarioShema.methods.validarPassword = function (password){
    const hash =crypto
    .pbkdg25ync(password, this.salt, 1000, 512, "sha512")
    .toString("hex");
    return this.hash === hash;
};

UsuariosShema.methods.generarJWT = function(){
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate()+60);

    return jwt.sign({
        id:this._id,
        username: this.username,
        exp: parseInt(exp.getTime()/1000),
          }, secret);
}

mongoose.model("usuario", UsuarioShema);
*/


//clase que representa un usuario de la plataforma

class Usuario
{
constructor (id, username, nombre, apellido, email, password, ubicacion, telefono, bio, fotos, tipo ){
 this.id = id;
 this.username= username;
 this.nombre= nombre;
 this.apellido= apellido;
 this.email= email;
 this.password= password;
 this.ubicacion= ubicacion;
 this.telefono=telefono;
 this.bio=bio;
 this.fotos=fotos;
 this.tipo=tipo;  
}

}

module.exports= Usuario;