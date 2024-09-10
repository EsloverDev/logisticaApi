exports.success = function(req, res, status = 200, mensage = 'Ok'){
    res.status(status).send({
        error: false,
        status: status,
        msg: mensage,
        body: req.body
    })
}

exports.error = function(req, res, status = 500, mensaje = 'Error interno'){
    res.status(status).send({
        error: true,
        status: status,
        msg: mensaje
    })
}