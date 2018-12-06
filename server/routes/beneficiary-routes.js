const express = require('express');
const mongoose = require('mongoose');
const Beneficiary = mongoose.model('Beneficiary');
var ApiResponse = require('../models/response');
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
        res.json(new ApiResponse(false,"Beneficiary exists"));
        }
        else{
            res.json(new ApiResponse(true,"successful",[{"100":3500},{"200":4000,"300":5000}]))
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
            res.json(new ApiResponse(false,"beneficiary update failed"));
        }
        else{
            console.log(rows);
            console.log("%d collections affected",rows);
            res.json(new ApiResponse(true,"success",[{"100":2200}]));
        }
    })
    
})

module.exports = app;