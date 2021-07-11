const { Router} = require('express');
const { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/users');
const { check } = require('express-validator');
const userRouter = Router();
userRouter.get('/',    getUsuarios);
userRouter.get('/:id', getUsuario);
userRouter.post('/',   postUsuario);
userRouter.put('/:id',    putUsuario);
userRouter.delete('/', deleteUsuario);

module.exports = userRouter