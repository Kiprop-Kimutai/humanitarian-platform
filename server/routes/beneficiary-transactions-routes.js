const express = require('express');
const mongoose = require('mongoose');
const BeneficiaryTxn = mongoose.model("BeneficiaryTxn");
//const ApiResponse = require('../models/response');
const BeneficiaryTxnResponse = require('../models/apiresponse/beneficiarytxnresponse');
const app = express();

app.get("/", (req,res,next) =>{
    res.send("working....");
})

app.post('/beneficiarytxn',(req,res,next) =>{
    var beneficiaryTxn = new BeneficiaryTxn(req.body.benTxn);
    for(var i=0;i<beneficiaryTxn.length;i++){
        beneficiaryTxn[i].save((err)=>{
            if(err){
                console.error(err);
                //res.json(new ApiResponse(false,"153","transaction operation failed"));
                res.json(new BeneficiaryTxnResponse(false,"200",0,"card blocked"))
            }
            else{
                console.log("Transaction successfull");
                //res.json(new ApiResponse(true,'000',"success"));
                res.json(new BeneficiaryTxnResponse(true,"100",1,"successful"))
            }
        })
    }
})

module.exports = app;