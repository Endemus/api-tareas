'use strict'
const login_=require('../../lib/login/login');
const usuario=require('../../lib/users/users');
async function crearCuenta(req,res) {
    let params= req.body;
    let email= params.email;
    let password=params.password;
    let nombreUsuario= params.nombreUsuario;
    let resultado = await usuario.crearUsuario(email,nombreUsuario,password)
    return res.status(200).send({
        resultado:resultado
    })
}
function login(req,res) {
    let params=req.body;
    let email=params.email;
    let password=params.password;
    let resultado= await login_.validarAcceso(email,password);
    return res.status(200).send({
        resultado:resultado
    });
}

module.exports={
    crearCuenta,
    login
}