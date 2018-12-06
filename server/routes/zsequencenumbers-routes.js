var express = require('express');
var mongoose = require('mongoose');
const ZsequenceNumbers = mongoose.model('zSequenceNumbers');
var ApiResponse = require('../models/response');
var app = express();

app.get('/',(req,res,next) =>{
    res.send("zsequence number routes working....");
})

app.get('fetchall',(req,res,next) =>{
    console.log("Query init....");
    ZsequenceNumbers.find({},(err,data) =>{
        if(err){
            console.log(err);
            res.json(new ApiResponse(400,"Error querying TS"));
        }
        else{
            console.log("Query executed successfully");
            res.json(new ApiResponse(201,data));
        }
    })
})
module.exports = app;