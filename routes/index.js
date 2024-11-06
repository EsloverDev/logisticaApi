const express = require('express');
// Aquí llamamos al archivo respuesta.js
const respuesta = require('../src/util/respuesta');
// Aquí le decimos que vamos a utilizar express para manejar las rutas
const router = express.Router();

const controller = require('../src/modulos/usuario/usuarioController');

// Aquí creamos la configuración para el verbo get que tiene como parámetros una ruta ('/user/login'), y una función callback que a su vez tiene como parámetros un request y un response. Esta función se encarga de validar si un usuario existe para posteriormente permitirle el acceso a la app.
router.post('/user/login', (req, res) => {
    const {Usuario, Clave} = req.body;
    console.log(req.body + Usuario + Clave)
    controller.ingresar(Usuario, Clave).then(result => {
        if(result.length > 0){
            respuesta.success(req, res, 200, result);
        } else {
            respuesta.error(req, res, 401, 'Usuario o clave incorrectos');
        }
    })
});

// método para crear un usuario; en este caso usamos el verbo post y cambiamos la ruta ('/user/create')
router.post('/user/create', (req, res) => {
    respuesta.success(req, res, 200, 'Usuario creado');
})

router.post('/user/contact', (req, res) => {
    respuesta.success(req, res, 200, 'Mensaje enviado');
})

router.get('/user/list', (req, res) => {
    const getAllUsers = controller.listarTodos().then((items) => {
        respuesta.success(req, res, 200, items);
    })
})

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const getUser = controller.listarUno(id).then((items) => {
        respuesta.success(req, res, 200, items);
    })
})

module.exports = router;
