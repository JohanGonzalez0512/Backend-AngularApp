const { Router} = require('express');
const { getUserById, getUsers, postUser, putUser, deleteUser, getTodosOfUser } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { checkUserExistence } = require('../middlewares/dbValidations');
const { validateFileds } = require('../helpers/validateFields');
const { isUsernameLengthValid } = require('../helpers/db-validators');
const userRouter = Router();
userRouter.get('/',    getUsers);
userRouter.get('/:user_id', [
    check('user_id','The user id is a number and is required').isNumeric().notEmpty(),
    validateFileds,
    checkUserExistence
]
,getUserById);
userRouter.put('/:user_id', [
    check('user_id','The user id is a number and is required').isNumeric().notEmpty(),
    check('name',"The name is required and musn't be empty").isString().notEmpty(),
    check('lastname',"The lastname id required and musn't be empty").isString().notEmpty(),
    check('username',"The username is required and musn't be empty").isString().notEmpty().custom(isUsernameLengthValid),
    validateFileds,
    checkUserExistence
] 
,putUser);
userRouter.delete('/:user_id', [
    check('user_id','The user id is a number and is required').isNumeric().notEmpty(),
    validateFileds,
    checkUserExistence
],deleteUser);

module.exports = userRouter