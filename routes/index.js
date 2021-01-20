var router = require('express').Router();


router.get('/', (req, res) => {
    res.send("respuesta del api");
});



router.use('/usuarios', require('./usuarios'));
router.use('/mascota', require('./mascotas'));

module.exports = router;

