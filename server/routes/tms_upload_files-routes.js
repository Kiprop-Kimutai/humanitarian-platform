var express = require('express');
var mongoose = require('mongoose');
var TMSUploadFiles = mongoose.model('tms_upload_files');
var ApiResponse = require('../models/response');
var app = express();

app.get('/', (req,res,next) =>{
    res.send("tms_upload_files routes working.....");
})

app.get('/fetchall',(req,res,next) =>{
    console.log("Query init...");
    TMSUploadFiles.find({},(err,data) =>{
        if(err){
            console.error(err);
            res.json(JSON.stringify(new ApiResponse(400,"Error querying TS files")));
        }
        else{
            console.log("Query executed successfully");
            res.json(new ApiResponse(201,data));

        }
    })
})
module.exports = app;