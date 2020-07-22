'use strict'
const usuario=require('../../models/users/users.model');
function validarAcceso(email, password) {
    if(email!=undefined && password!=undefined){
        if(email.length>0 && password.length>0){
            usuario.find({email:email, password:password}, 
                function(error,resultado){
                if(resultado.length>0){
                    let datoUsuario=resultado[0];
                    return {
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
                        valido:false,
                        message:'Usuario no encontrado'
                    }
                }
            });
        }
        return {
            valido:false,
            message:'email o password vacios'
        }
    }
    return {
        valido:false,
        message:'email o password vacios'
    }
}

module.exports={
    validarAcceso
}