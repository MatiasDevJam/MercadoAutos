const {check} = require('express-validator');

module.exports = [
    check('username')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),

    check('pass')
    .notEmpty()
    .withMessage('El contraseña es requerida'),
    
]