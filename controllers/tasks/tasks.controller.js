'use strict'
const tareas = require('../../lib/tasks/tasks');
async function crearTarea(req,res) {
    let params= req.body;
    let titulo=params.titulo;
    let descripcion= params.descripcion;    
    let idUsuario= params.idUsuario;
    let resultados= await tareas.registrarTarea(titulo,descripcion,idUsuario);
    return res.status(200).send(resultados);
}
async function tareaCompletada(req,res) {
    let params=req.body;
    let idTask=params.idTask;
    let idUsuario=params.idUsuario;    
    let resultados=await tareas.terminarTarea(idTask,idUsuario);
    console.log(resultados)
    return res.status(200).send(resultados);
}
async function iniciaTarea(req,res) {
    let params=req.body;
    let idTask=params.idTask;
    let idUsuario=params.idUsuario;
    let resultados=await tareas.iniciarTarea(idTask,idUsuario);
    return res.status(200).send(resultados);
}
async function listadoTareas(req,res) {
    let params=req.params;    
    let idUsuario=params.idUsuario;
    let resultados=await tareas.listarTareasUsuario(idUsuario);   
    console.log(resultados) ;
    return res.status(200).send(resultados);
}

module.exports={
    crearTarea,
    tareaCompletada,
    iniciaTarea,
    listadoTareas
}