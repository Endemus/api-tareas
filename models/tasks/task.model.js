'use strict'
const mongoose= require('mongoose');
const Schema=mongoose.Schema;
let taskSchema=Schema({
    titulo:String,
    descripcion:String,
    fechaRegistro:{
        type: Date,        
        default: Date.now
      },
    fechaInicio:Date,
    fechaTermino:Date,
    iniciada:{type: Boolean, default: false},
    terminada:Boolean,
    idUsuario:{ type: Schema.ObjectId, ref: 'usuarios' }
});

module.exports=mongoose.model('task',taskSchema);