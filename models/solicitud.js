//clase que representa una solicitud de adopcion

class Solicitud {
    constructor(id, idMascota, fechaDeCreacion, idUsuarioAnunciante, idUsuarioSolicitante, estado) {
      this.id = id;
      this.idMascota = idMascota;
      this.fechaDeCreacion = fechaDeCreacion;
      this.idUsuarioAnunciante = idUsuarioAnunciante;
      this.idUsuarioSolicitante = idUsuarioSolicitante;
      this.estado = estado;
    }
  
  }
  
  module.exports = Solicitud;