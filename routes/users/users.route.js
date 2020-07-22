const express=require('express');
const api=express.Router();
const usuarioController= require('../../controllers/users/users.controller');

api.post('/', usuarioController.crearUsuario);
api.get('/',usuarioController.obtenerDatosUsuario);

module.exports=api;