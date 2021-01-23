

//clase que representa un usuario de la plataforma

class Usuario
{
constructor ({id, username, nombre, apellido, email, pass, ubicacion, telefono, bio, fotos, tipo}){
 this.id = id;
 this.username= username;
 this.nombre= nombre;
 this.apellido= apellido;
 this.email= email;
 this.pass= pass;
 this.ubicacion= ubicacion;
 this.telefono=telefono;
 this.bio=bio;
 this.fotos=fotos;
 this.tipo=tipo;  
}

}

module.exports= Usuario;