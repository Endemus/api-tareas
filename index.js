'use strict'
const mongoose= require('mongoose');
const app=require('./app');
let port= process.env.PORT|| 3000;
mongoose.connect('mongodb+srv://tareas:0TKYnWyC5sGBaVLm@cluster0-lq7qt.gcp.mongodb.net/tareas?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port,function(){
            console.log('Api online');
        });
    }
});