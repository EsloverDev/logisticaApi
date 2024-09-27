const express = require('express');
// Aquí llamamos al archivo respuesta.js
const respuesta = require('../src/util/respuesta');
// Aquí le decimos que vamos a utilizar express para manejar las rutas
const router = express.Router();

// Aquí creamos la configuración para el verbo get que tiene como parámetros una ruta ('/user/login'), y una función callback que a su vez tiene como parámetros un request y un response. Esta función se encarga de validar si un usuario existe para posteriormente permitirle el acceso a la app.
router.post('/user/login', (req, res) => {
    if(req.body.user == 'edwin@mail.com' && req.body.pass == '1234'){
        respuesta.success(req, res);
    }
    respuesta.error(req, res);
});

// método para crear un usuario; en este caso usamos el verbo post y cambiamos la ruta ('/user/create')
router.post('/user/create', (req, res) => {
    respuesta.success(req, res, 200, 'Usuario creado');
})

module.exports = router;
