const db = require('../../database/db');

const entidad = 'usuario';

function listarTodos(){
    return db.getAll(entidad);
}

module.exports = {
    listarTodos
}