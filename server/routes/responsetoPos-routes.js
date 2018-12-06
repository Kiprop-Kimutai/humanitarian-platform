var express = require('express');
var mongoose = require('mongoose');
var ApiResponse = require('../models/response');
var ResponseToPos = mongoose.model("responseToPos");
var app =express();

app.get('/',(req,res,next) =>{
    res.send("Responding to POS.....");
})

app.get('/fetchall',(req,res,next) =>{
    ResponseToPos.find({},(err,data) =>{
        if(err){
            console.error(err);
            res.json(new ApiResponse(400,"Error querying response to pos"));
        }
        else{
            console.log("Query executed successfully");
            console.log(data);
            res.json(new ApiResponse(201,data));
        }
    })

})

module.exports = app;