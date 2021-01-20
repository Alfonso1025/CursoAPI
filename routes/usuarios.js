const router = require('express').Router();

const {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    obtenerUsuarios
} = require('../controllers/usuarios')

router.get('/', obtenerUsuarios);
router.delete('/:id', eliminarUsuario);
router.post('/',crearUsuario);
router.put('/:id', modificarUsuario);

module.exports = router;

/*
    Traer usuarios metodo GET
    crear usuarios metodo POST
    Modificar Usuarios metodo PUT
    Eliminar usuarios DELETE

*/
