const express = require('express');
const mongoose = require('mongoose');
const ApiResponse = require('../models/response');
const StoreTxnSchema = mongoose.model("StoreTxnSchema");
const app = express();

app.get('/',(req,res,next)=>{
    res.send("strore txn ....");
})

app.post('/storetxn',(req,res,next) =>{
    var storeTxnSchema = new StoreTxnSchema(req.body.storeTxn);
    storeTxnSchema.save((err)=>{
        if(err){
            console.error(err);
            res.json(new ApiResponse(false,"300","failed to process"));
        }
        else{
            console.log("txn success");
            res.json(new ApiResponse(true,"000","success"));
        }
    })
})

module.exports = app;