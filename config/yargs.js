const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca el estado de la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'borra una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}