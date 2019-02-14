const express = require('express');
const CustomerBalanceRequest = require('../models2/apirequest/customerbalancerequest');
const CustomerBalanceResponse = require('../models2/apiresponse/customerbalanceresponse');
const CustomerResultDesc = require('../models2/apiresponse/customerResultDesc');
const LinkCardResponse = require('../models2/apiresponse/linkcardresponse');
const app = express();

app.get('/',(req,res,next) =>{
    res.send("working.....");
})

app.post('/benbalrequest',(req,res,next) =>{
    console.log(req.body);
    if(req.body.benfBalRequest){
        var resultDesc = [new CustomerResultDesc("M-PESA Account",5815,"SSP"),new CustomerResultDesc("WFP Beneficiary Account",0,"SSP")];
        var customerbalanceresponse = new CustomerBalanceResponse(
            true,"0","success/benfBalRequest success",resultDesc
        );
        res.status(201).json((customerbalanceresponse));
    }
    else{
        res.status(201).send(JSON.stringify(new CustomerBalanceResponse(false,0,"invalid request method","")));
    }

    
})

app.post('/linkcard',(req,res,next) =>{
    if(req.body.benRegistration){
        var resultDesc = [new CustomerResultDesc("M-PESA Account",2500,"SSP"),new CustomerResultDesc("WFP Beneficiary Account",4000,"SSP")];
        var linkCardResponse = new LinkCardResponse(true,"0","success/benRegistration success",resultDesc)
        res.status(201).json(linkCardResponse);

    }
    else{
        res.status(201).send(JSON.stringify(new CustomerBalanceResponse(false,0,"invalid request method","")));
    }
})
module.exports = app;