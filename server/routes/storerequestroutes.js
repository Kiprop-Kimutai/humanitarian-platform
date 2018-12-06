const express = require('express');
const mongoose = require('mongoose');
const ApiResponse = require('../models/response');
const StoreRequest = mongoose.model("StoreRequest");
const app = express();

app.get("/",(req,res,next) =>{
    res.send("store request working");
})
app.post("/storerequest",(req,res,next) =>{
    var storeRequest = new StoreRequest(req.body.storeRequest);
    storeRequest.save((err)=>{
        if(err){
            console.error(err);
            res.json(new ApiResponse(false,"failed"));
        }
        else{
            console.log("success");
            res.json(new ApiResponse(true,"000",[{"100":2200}]));
        }
    })

})
module.exports = app;