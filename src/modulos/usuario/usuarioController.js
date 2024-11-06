const db = require('../../database/db');

const entidad = 'usuario';

function listarTodos(){
    return db.getAll(entidad);
}

function listarUno(id){
    return db.getId(entidad, id);
}

function ingresar(usuario, clave){
    return db.loginValidation(entidad, usuario, clave)
}

module.exports = {
    listarTodos,
    listarUno,
    ingresar
}