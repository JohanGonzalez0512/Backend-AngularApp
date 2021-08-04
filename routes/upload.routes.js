const { Router} = require('express');
const { check } = require('express-validator');
const { cargarArchivo, actualizarImagen, mostrarImagen} = require('../controllers/uploads.controller');
const { coleccionesPermitidas } = require('../helpers/db-validators');

const uploadRouter = Router();

uploadRouter.post('/', cargarArchivo);
uploadRouter.put('/:coleccion/:id',[
    check('id','El id debe de ser de mysql y es obligatorio').isNumeric().exists({checkNull:true}),
    check('coleccion').custom(c => coleccionesPermitidas(c,['usuarios']))
],actualizarImagen);

uploadRouter.get('/:coleccion/:id',[
    check('id','El id debe de ser de mysql y es obligatorio').isNumeric().exists({checkNull:true}),
    check('coleccion').custom(c => coleccionesPermitidas(c,['usuarios']))
], mostrarImagen);


module.exports = uploadRouter