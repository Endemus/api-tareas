'use strict'
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const login_routes=require('./routes/login/login.route');
const user_routes=require('./routes/users/users.route');
const task_routes=require('./routes/tasks/tasks.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Allow', 'GET', 'POST','PUT','DELETE');
    res.header();
    next();
});

app.use('/api/login',login_routes);
app.use('/api/users',user_routes);
app.use('/api/task',task_routes);

module.exports=app;