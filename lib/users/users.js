'use strict'
const modeloUsuario=require('../../models/users/users.model');
async function crearUsuario(email, nombre,password) {
    if(email!=undefined){
        if(email.lenght>0){
            //validacion de estructura de correo
            let resultado=await modeloUsuario.find({email:email});
            if(resultado.length>0){
                return {
                    codigo:400,
                    mensaje:'El correo del usuario ya esta registrado',
                    datos:{
                        usuario:{
                            nombre:nombre,
                            email:email
                        }
                    }
                }
            }
        }
    }
    try {
        let nuevoUsuario= new modeloUsuario({
            email:email,
            nombreUsuario:nombre,
            password:password
        });   
        let resultado= await nuevoUsuario.save();        
        if(resultado==undefined){
            return {
                codigo:400,
                mensaje:'El usuario no se registro',
                datos:{
                    usuario:{
                        nombre:nombre,
                        email:email
                    }
                }
            }
        }
        else{
            return {
                codigo:200,
                mensaje:'Usuario registrado',
                datos:{
                        usuario:{
                            idUsuario:resultado._id,
                            nombre:resultado.nombreUsuario,
                            email:resultado.email,                    
                        }
                    }
            };   
        }
     
    } catch (error) {
        return {
            codigo:500,
            mensaje:'Ocurrio un error al registrar al nuevo usuario',
            datos:{
                usuario:{
                    nombre:nombre,
                    email:email
                }
            }
        }
    }    
}
async function obtenerDatosUsuario(idUsuario) {
    try {
        modeloUsuario.findById(idUsuario,function(error,usuario){
            if(error){
                console.log('Ocurrio un error al obtner los datos del usuario');
                return{
                    codigo:500,
                    mensaje:'Ocurrio un error al obtener los datos del usuario',                    
                }
            }
            else if(usuario==undefined){
                return {
                    codigo:400,
                    mensaje:'El usuario no fue encontrado'
                }
            }
            else{
                return {
                    codigo:200,
                    mensaje:'Usuario encontrado',
                    datos:{
                        usuario:{
                            idUsuario:usuario._id,
                            nombre:usuario.nombre,
                            email:usuario.email,                    
                        }
                    }
                }
            }
        })   
    } catch (error) {
        
    }    
}

module.exports={
    crearUsuario,
    obtenerDatosUsuario
}