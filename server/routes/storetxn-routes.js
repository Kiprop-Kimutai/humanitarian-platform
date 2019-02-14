const express = require('express');
const mongoose = require('mongoose');
//const ApiResponse = require('../models/response');
const StoreTxnResponse = require('../models/apiresponse/storetxnresponse');
const StoreTxnSchema = mongoose.model("StoreTxnSchema");
//const StoreBalanceRequest = mongoose.model("StoreBalanceRequest");
const app = express();

app.get('/',(req,res,next)=>{
    res.send("strore txn ....");
}) 

app.post('/storetxn',(req,res,next) =>{
    //console.log(req);
    console.log(req.body);
    console.log(req.headers);
    var storeTxnSchema = new StoreTxnSchema(req.body.storeTxn);
    storeTxnSchema.save((err)=>{
        if(err){
            console.error(err);
            res.json(new StoreTxnResponse(false,322,"","","Failed store transactions"));
        }
        else{
            console.log("txn success");
            //res.json(new ApiResponse(true,"000","success"));
            res.json(new StoreTxnResponse(true,"000",2000,1000,"success"));
        }
    })
})

app.post('/requestbalance',(req,res,next)=>{
    var storeBalanceRequest = new StoreBalanceRequest(req.body.storeBalanceRequest);
    storeBalanceRequest.save((err)=>{
        if(err){
            console.error(err);
            res.json(new StoreTxnResponse(true,"400","","","failed/storeRequest failed"));

        }
        else{
            res.json(new StoreTxnResponse(true,"153","","","success/storeRequest success"));
        }
    })
})

module.exports = app;