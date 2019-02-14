const express = require('express');
const mongoose = require('mongoose');
const BeneficiaryRequest = mongoose.model("BeneficiaryRequest");
//const ApiResponse = require('../models/response');
const BeneficiaryRequestResponse = require("../models/apiresponse/beneficiaryrequestresponse");
const app = express();

app.get('/',(req,res,next) =>{
    res.send("beneficiary request.....");
})

app.post('/programmeupdate',(req,res,next) =>{
    var beneficiaryRequest = new BeneficiaryRequest(req.body.benfRequest);
    beneficiaryRequest.save((err)=>{
        if(err){
            console.error(err);
            //res.json(new ApiResponse(false,"failed"));
            res.json(false,"200",0,"Card is blocked",[]);
        }
        else{
            console.log("Beneficiary request sucsess");
           // res.json(new ApiResponse(true,[{"100":2200}]));
            res.json(new BeneficiaryRequestResponse(true,"100",1,"Success", {"balances": [{"walletName": "WFP","WalletBalance": 3500,"walletID": "100","currency": "Ksh"},{"walletName": "IOM","WalletBalance": 4000,"walletID": "200","currency": "Ksh"}]}));
        }
    })
})

app.post('/ministatement',(req,res,next) =>{
    console.log("....");
    var beneficiaryRequest = new BeneficiaryRequest(req.body.benfRequest);
    beneficiaryRequest.save((err)=>{
        if(err){
            console.error(err);
            res.json(false,"200",0,"Card is blocked",[]);
        }
        else{
            console.log("ministatement fetched successfully");
            res.json(new BeneficiaryRequestResponse(true,"200",1,"success", {"transactions": [{"transOperation": "111","amount": 1027,"debitAccountNo": "8cg4382017583718","creditAccountNo": "8cg4382017583719","transId": "BT-75873937","walletName": "100","walletID": "100","walletBalance": 100,"terminalId ": "82346731 ","authMode": "100"}, {"transOperation": "111","amount": 1027,"debitAccountNo": "8cg4382017583718","creditAccountNo": "8cg4382017583719","transId": "BT-758739323237","walletName": "100","walletID": "100","walletBalance": 100,"terminalId ": "82346731 ","authMode": "100"}]}));
        }
    })
})
module.exports = app;