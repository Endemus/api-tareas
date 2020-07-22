'use strict'
const modeloTask=require('../../models/tasks/task.model');
async function registrarTarea(titulo, descripcion, fechaTermino) {
    let task= new modeloTask({
        titulo:titulo,
        descripcion:descripcion,
        fechaInicio:Date.now(),
        fechaTermino:fechaTermino
    });
    await task.save()
    return task;
}
function terminarTarea(idTask) {
   modeloTask.findByIdAndUpdate({_id:idTask},{fechaTermino:Date.now()},
   function(error,resultado){
       if(error){
        return {error:error};
       }
       if(resultado){
        return {resultado:resultado};
       }       
   }).catch((error)=>{
       return {error:error};
   });
}
function listarTareasUsuario(idUsuario) {
    modeloTask.find({idUsuario:idUsuario},function(error,resultados){
        if(error){
            return {error:error};
        }
        if(resultados!=undefined){
            return {resultados:resultados};
        }
        return {message:'No se encontraron resultados'};
    });
}

module.exports={
    registrarTarea,
    terminarTarea,
    listarTareasUsuario
}