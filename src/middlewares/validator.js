const {check} = require('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage('Nombre requerido'),
    check('email')
        .notEmpty().withMessage('Email requerido').bail()
        .isEmail().withMessage('Debes ingresar un email válido'),
    check('color')
        .notEmpty().withMessage('Color requerido'),
    check('age')
        .isInt().withMessage('La edad debe ser un número'),
    
]