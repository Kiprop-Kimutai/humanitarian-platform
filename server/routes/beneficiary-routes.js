const express = require('express');
const mongoose = require('mongoose');
const Beneficiary = mongoose.model('Beneficiary');
//var ApiResponse = require('../models/response');
var BeneficiaryResponse = require('../models/apiresponse/beneficiaryresponse');
const app = express();

app.get("/", (req,res,next) =>{
    res.send('beneficiary endpoint working....');
})

app.post('/enrollbeneficiary',(req,res,next) =>{
    console.log("Enroll beneficiary request received");
    console.log(req.body);
    var beneficiary = new Beneficiary(req.body.benRegistration);
    beneficiary.save((err) =>{
        if(err){
        console.error(err);
        res.json(new BeneficiaryResponse(false,"200",1,"Beneficiary  already exist",[]));
        }
        else{
           res.json(new BeneficiaryResponse(true,"100",1,"Success",[{"walletName": "WFP","WalletBalance": 3500,"walletID": "100","currency": "Ksh"	},{"walletName": "IOM","WalletBalance": 4000,"walletID": "200","currency": "Ksh"}]));
        }
    })
})

app.post('/updateBeneficiary',(req,res,next) =>{
    console.log("update beneficiary request received");
    var beneficiary = new Beneficiary(req.body.updateBeneficiary);
    console.log(beneficiary);
    Beneficiary.findOneAndUpdate({iccid:beneficiary.iccid},{lastname:beneficiary.lastname},{new:true},(err,rows)=>{
        if(err){
            console.error(err);
            res.json(new BeneficiaryResponse(false,"200",1,"Error updating this field",[]));
            
        }
        else{
            console.log(rows);
            console.log("%d collections affected",rows);
            res.json(new BeneficiaryResponse(true,"100",1,"Success",[{"walletName": "WFP","WalletBalance": 3500,"walletID": "100","currency": "Ksh"	},{"walletName": "IOM","WalletBalance": 4000,"walletID": "200","currency": "Ksh"}]));
        }
    })
    
})

module.exports = app;