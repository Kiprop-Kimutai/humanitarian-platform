const express = require('express');
const mongoose = require('mongoose');
const UsersRequest = mongoose.model('UsersRequest');

var UserResponse = require('../models/apiresponse/usersresponse');
const app = express();

app.get('/test', (req,res,next) =>{
    res.send("ok...");
})

app.post('/fetchusers',(req,res,next) =>{
    var usersRequest = new UsersRequest(req.body);
    usersRequest.save((err) =>{
        if(err){
            console.error(err);
            res.json(new UserResponse(false,"200","Device not registered",{}));
        }
        else{
            res.json(new UserResponse(true,"100","success",{"userDetails": {"username": "james","firstName": "James","lastName": "Tarus","userLevel": "0","pin": "1233","IdNumber": "3424231234"},"agentDetails": {"agentId": "121212","agentName": "Safari  Com Limited"}}))
        }
    })
})
module.exports = app;