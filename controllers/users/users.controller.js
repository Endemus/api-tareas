'use strict'
const usuarios=require('../../lib/users/users');
 async function crearUsuario(req,res) {
    let params=req.body;
    let email=params.email;
    let nombre=params.nombre;
    let password=params.password;
    let resultado=await usuarios.crearUsuario(email,nombre,password);
    console.log('controller')
    console.log(resultado);
    return res.status(200).send(resultado);
}
function obtenerDatosUsuario(req,res) {
    
}
module.exports={
    crearUsuario,
    obtenerDatosUsuario
}