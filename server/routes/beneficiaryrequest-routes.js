const express = require('express');
const mongoose = require('mongoose');
const BeneficiaryRequest = mongoose.model("BeneficiaryRequest");
const ApiResponse = require('../models/response');
const app = express();

app.get('/',(req,res,next) =>{
    res.send("beneficiary request.....");
})

app.post('beneficiaryrequest',(req,res,next) =>{
    var beneficiaryRequest = new BeneficiaryRequest(req.body.benfRequest);
    beneficiaryRequest.save((err)=>{
        if(err){
            console.error(err);
            res.json(new ApiResponse(false,"failed"));
        }
        else{
            console.log("Beneficiary request sucsess");
            res.json(new ApiResponse(true,[{"100":2200}]));
        }
    })
})
module.exports = app;