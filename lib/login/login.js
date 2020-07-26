'use strict'
const usuario=require('../../models/users/users.model');
async function validarAcceso(email, password) {    
    try {
        if(email!=undefined && password!=undefined){
            if(email.length>0 && password.length>0){
                let resultado=await usuario.find({email:email});                                     
                    if(resultado.length>0){
                        let datoUsuario=resultado[0];
                        if(datoUsuario.password==password){
                            return {
                                codigo:200,
                                valido: true,
                                datosUsuario:{
                                id:datoUsuario._id,
                                email:datoUsuario.email,
                                nombreUsuario:datoUsuario.nombreUsuario
                                }
                            };
                        }
                        else{
                            return{
                                codigo:400,
                                valido:false,
                                message:'El email o password incorrecto'
                            }
                        }                        
                    }
                    else{
                        return{
                            codigo:400,
                            valido:false,
                            message:'Usuario no encontrado'
                        }
                    }
            
            }
            return {
                codigo:400,
                valido:false,
                message:'email o password vacios'
            }
        }
        return {
            codigo:400,
            valido:false,
            message:'email o password vacios'
        }
    } catch (error) {
        return {
            codigo:500,
            valido:false,
            message:'Ocurrio un error al autenticar al usuario'
        }
    }
    
}

module.exports={
    validarAcceso
}