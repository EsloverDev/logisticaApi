// Aquí relacionamos este archivo con el archivo de las variables de entorno y le decimos que traiga las configuraciones
require('dotenv').config();

// Aquí escribimos el nombre de la constante que tiene acceso directo a las variables del archivo .env
const config = {
    port: process.env.PORT || 3000,
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB
    }
}

module.exports = config;