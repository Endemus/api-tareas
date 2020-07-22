'use strict'
const modeloUsuario=require('../../models/users/users.model');
async function crearUsuario(email, nombre,password) {
    let nuevoUsuario= new modeloUsuario({
        email:email,
        nombre:nombre,
        password:password
    });    
    await nuevoUsuario.save();
    return nuevoUsuario;
}
async function obtenerDatosUsuario(idUsuario) {
    modeloUsuario.findById(idUsuario).then((values)=>{
        return values;
    }).catch((error)=>{
        return error;
    });
}

module.exports={
    crearUsuario,
    obtenerDatosUsuario
}