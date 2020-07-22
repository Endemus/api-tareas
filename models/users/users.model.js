'use strict'
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let usuarioSchema=Schema({
    email:String,
    nombreUsuario:String,
    password:String
});

module.exports=mongoose.model('usuario',usuarioSchema);