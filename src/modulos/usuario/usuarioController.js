const db = require('../../database/db');

const entidad = 'usuario';
const otraEntidad = 'contacto';

function listarTodos(){
    return db.getAll(entidad);
}

function listarUno(id){
    return db.getId(entidad, id);
}

function ingresar(usuario, clave){
    return db.loginValidation(entidad, usuario, clave)
}

function contactar(nombre, correo, ciudad, telefono, mensaje){
    return db.contact(otraEntidad, nombre, correo, ciudad, telefono, mensaje)
}

module.exports = {
    listarTodos,
    listarUno,
    ingresar,
    contactar
}