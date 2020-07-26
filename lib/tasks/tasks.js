'use strict'
const modeloTask = require('../../models/tasks/task.model');
async function registrarTarea(titulo, descripcion, idUsuario) {

    if (titulo == undefined) {
        return {
            codigo: 400,
            mensaje: 'La tarea debe tener un titulo',
            datos: {
                tarea: {
                    titulo: titulo,
                    descripcion: descripcion,
                    idUsuario: idUsuario
                }
            }
        }
    }
    else if (titulo.lenght == 0) {
        return {
            codigo: 400,
            mensaje: 'La tarea debe tener un titulo',
            datos: {
                tarea: {
                    titulo: titulo,
                    descripcion: descripcion,
                    idUsuario: idUsuario
                }
            }
        }
    }
    if (idUsuario == undefined) {
        return {
            codigo: 400,
            mensaje: 'Sin usuario',
            datos: {
                tarea: {
                    titulo: titulo,
                    descripcion: descripcion,
                    idUsuario: idUsuario
                }
            }
        }
    }
    try {
        let task = new modeloTask({
            titulo: titulo,
            descripcion: descripcion,
            idUsuario: idUsuario
        });
        let resultado = await task.save()
        console.log(resultado);
        if (resultado == undefined) {
            return {
                codigo: 400,
                mensaje: 'Tarea no registrada',
                datos: {
                    tarea: {
                        titulo: titulo,
                        descripcion: descripcion,
                        idUsuario: idUsuario
                    }
                }
            }
        }
        else {
            return {
                codigo: 200,
                mensaje: 'Tarea registrada',
                datos: {
                    tarea: resultado
                }
            }
        }
    } catch (error) {
        return {
            codigo: 500,
            mensaje: 'Ocurrio un error al momento de registrar la tarea',
            datos: {
                tarea: {
                    titulo: titulo,
                    descripcion: descripcion,
                    idUsuario: idUsuario
                }
            }
        }
    }

}
async function terminarTarea(idTask, idUsuario) {    
    try {
        let resultado = await  modeloTask.findOne({ _id: idTask, idUsuario: idUsuario });        
        if (resultado == undefined) {
            
            return {
                codigo: 400,
                mensaje: 'Tarea no encontrada',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        if (resultado.terminada == true) {            
            return {
                codigo: 400,
                mensaje: 'La tarea ya se habia finalizado',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario,
                    fechaTermin:resultado.fechaTermino
                }
            }
        }
        if (resultado.iniciada == false) {            
            return {
                codigo: 400,
                mensaje: 'Tarea sin iniciar',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        let terminada = await modeloTask.updateOne({ _id: idTask, idUsuario: idUsuario },
             { fechaTermino: Date.now(), terminada: true });        
        if (terminada == undefined) {
            return {
                codigo: 400,
                mensaje: 'La tarea no se finalizo',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        return {
            codigo: 200,
            mensaje: 'Tarea finalizada',
            datos: terminada
        }
    } catch (error) {
        console.log(error)
        return {
            codigo: 500,
            mensaje: 'Ocurrio un error al terminar la tarea',
            datos: {
                idTask: idTask,
                idUsuario: idUsuario
            }
        }
    }



}
async function iniciarTarea(idTask, idUsuario) {
    try {
        let resultado = await modeloTask.findOne({ _id: idTask, idUsuario: idUsuario });
        if (resultado == undefined) {
            return {
                codigo: 400,
                mensaje: 'Tarea no encontrada',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        if (resultado.iniciada == true) {
            return {
                codigo: 400,
                mensaje: 'La tarea ya habia sido inicializada',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        if (resultado.terminada == true) {
            return {
                codigo: 400,
                mensaje: 'La tarea ya fue finalizada',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        let iniciada = await modeloTask.updateOne({ _id: idTask, idUsuario: idUsuario },
             { fechaInicio: Date.now(), iniciada: true });
        console.log(iniciada);
        if (iniciada == undefined) {
            return {
                codigo: 400,
                mensaje: 'La tarea no se inicializo',
                datos: {
                    idTask: idTask,
                    idUsuario: idUsuario
                }
            }
        }
        return {
            codigo: 200,
            mensaje: 'Tarea iniciada',
            datos: {
                idTask:idTask
            }
        }
    } catch (error) {
        return {
            codigo: 500,
            mensaje: 'Ocurrio un error al iniciar la tarea',
            datos: {
                idTask: idTask,
                idUsuario: idUsuario
            }
        }
    }
}
async function listarTareasUsuario(idUsuario) {
    try {
        let resultados = await modeloTask.find({ idUsuario: idUsuario });
        if (resultados == undefined) {
            return {
                codigo: 400,
                mensaje: 'No se encontraron tareas',
                datos: {
                    idUsuario: idUsuario
                }
            }
        }
        return {
            codigo: 200,
            mensaje: 'Listado obtenido',
            datos: resultados
        }
    } catch (error) {
        return {
            codigo: 500,
            mensaje: 'Ocurrio un error al obtener la lista de tareas',
            datos: {
                idUsuario: idUsuario
            }
        }
    }

}

module.exports = {
    registrarTarea,
    terminarTarea,
    iniciarTarea,
    listarTareasUsuario
}