

const coleccionesPermitidas = (coleccion = '', colecciones = [] )=> {
    const incluida = colecciones.includes( coleccion );
    if(!incluida) {
        throw new Error(`La coleecion ${ coleccion } no es permitida`)
    }
    return true;
}


module.exports = {
    coleccionesPermitidas
}