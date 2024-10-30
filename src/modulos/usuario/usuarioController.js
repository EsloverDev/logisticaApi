const db = require('../../database/db');

const entidad = 'usuario';

function listarTodos(){
    return db.getAll(entidad);
}

function listarUno(id){
    return db.getId(entidad, id);
}

module.exports = {
    listarTodos,
    listarUno
}