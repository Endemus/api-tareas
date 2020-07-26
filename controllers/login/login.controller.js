'use strict'
const login_=require('../../lib/login/login');
async function login(req,res) {
    let params=req.body;
    let email=params.email;
    let password=params.password;
    let resultado= await login_.validarAcceso(email,password);
    return res.status(200).send({
        resultado:resultado
    });
}

module.exports={
    login
}