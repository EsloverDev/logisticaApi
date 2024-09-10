// Aquí relacionamos este archivo con el archivo de las variables de entorno y le decimos que traiga las configuraciones
require('dotenv').config();

// Aquí escribimos el nombre de la constante que tiene acceso directo a las variables del archivo .env
const config = {
    port: process.env.PORT || 3000
}

module.exports = config;