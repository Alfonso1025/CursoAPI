const router = require('express').Router();

const {
    crearMascota,
    modificarMascota,
    eliminarMascota,
    obtenerMascota
} = require('../controllers/mascota')

router.get('/', obtenerMascota);
router.delete('/:id', eliminarMascota);
router.post('/',crearMascota);
router.put('/:id', modificarMascota);

module.exports = router;