// Creamos una constante para manejar el paquete express
const express = require('express');
// Aquí creamos una constante para manejar las rutas
const routes = require('./routes/index');
// Aquí incluimos el archivo config, que nos permite acceder a las variables de entorno
const config = require('./src/config');

const cors = require('cors');

// Aquí creamos una constante para manejar la aplicación y poder utilizar todo lo de express
const app = express();

// Aquí estamos usando el middleware express.json() para que las peticiones que hagamos reciban formato json
app.use(express.json());

app.use(cors());

// Aquí indicamos que vamos a empezar a utilizar las rutas, y que la ruta principal va a ser la ruta raíz, y que a partir de ahí voy a utilizar las rutas que definí en la variable routes.
app.use('/', routes);

// Aquí ponemos a escuchar al servidor y le pasamos como argumento la variable con el puerto que definimos anteriormente, y una función callback que es lo que retorna la función; esto sirve para subir el servidor
app.listen(config.port, () => {
    console.log(`Servicio escuchando por el puerto ${config.port}`);
})
