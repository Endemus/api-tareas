'use strict'
const express=require('express');
const api=express.Router();
const login=require('../../controllers/login/login.controller');

api.post('/acceso', login.login);

module.exports=api;