const express = require('express');
const mongoose = require('mongoose');
const BeneficiaryTxn = mongoose.model("BeneficiaryTxn");
const ApiResponse = require('../models/response');
const app = express();

app.get("/", (req,res,next) =>{
    res.send("working....");
})

app.post('/beneficiarytxn',(req,res,next) =>{
    var beneficiaryTxn = new BeneficiaryTxn(req.body.benTxn);
    beneficiaryTxn.save((err)=>{
        if(err){
            console.error(err);
            res.json(new ApiResponse(false,"153","transaction operation failed"));
        }
        else{
            console.log("Transaction successfull");
            res.json(new ApiResponse(true,'000',"success"));
        }
    })
})

module.exports = app;