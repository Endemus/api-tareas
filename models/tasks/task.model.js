'use strict'
const mongoose= require('mongoose');
const Schema=mongoose.Schema;
let taskSchema=Schema({
    titulo:String,
    descripcion:String,
    fechaInicio:Date,
    fechaTermino:Date,
    idUsuario:{ type: Schema.ObjectId, ref: 'usuarios' }
});

module.exports=mongoose.model('task',taskSchema);