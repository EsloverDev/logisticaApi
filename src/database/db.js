const mysql = require('mysql');
const config = require('../config');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;
let reconnect = 0;
let maxRec = 3;

function dbConnection(){
    connection = mysql.createConnection(dbConfig);
    connection.connect((error) => {
        if(error){
            reconnect ++;
            console.log(`Error de conexión a la BD: ${error}`);
            if(reconnect >= maxRec){
                process.exit(1);
            }
            setTimeout(dbConnection, 200);
        }
        else{
            console.log('Conexión exitosa a la base de datos');
        }
    });
}

dbConnection();

function getAll(entidad){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${entidad}`, (error, result) => {
            if(error){
                return reject(error);
            }
            console.log(result);
            return resolve(result);
        })
    });
}

function getId(entidad, id){
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${entidad} WHERE Id = ${id}`, (error, result) => {
            if(error){
                return reject(error);
            }
            return resolve(result)
        })
    });
}

function loginValidation(entidad, user, pass){
    return new Promise((resolve, reject) => {
        console.log(`SELECT * FROM ${entidad} WHERE Usuario = '${user}' AND Clave = '${pass}';`)
        connection.query(`SELECT * FROM ${entidad} WHERE Usuario = '${user}' AND Clave = '${pass}';`, (error, result) => {
        console.log();
            if(error != null){
                return reject(error);
            }
            return resolve(result)
        })
    });
}

function add(entidad, datos){

}

function update(entidad, datos){

}

function state(entidad, id, estado){

}

module.exports = {
    getAll,
    getId,
    add,
    update,
    state,
    loginValidation
}