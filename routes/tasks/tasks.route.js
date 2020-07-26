'use strict'
const express=require('express');
const api=express.Router();
const tareasController= require('../../controllers/tasks/tasks.controller');
const tasksController = require('../../controllers/tasks/tasks.controller');

api.post('/task/',tareasController.crearTarea);

api.put('/task/termina-tarea', tasksController.tareaCompletada);
api.put('/task/inicia-tarea', tasksController.iniciaTarea);

api.get('/listado-tareas/:idUsuario',tasksController.listadoTareas);

module.exports=api;