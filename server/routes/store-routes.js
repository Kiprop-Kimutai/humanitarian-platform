const express = require('express');
const StoreResultDesc = require('../models2/apiresponse/customerResultDesc');
const storebalancerequest = require('../models2/apirequest/storebalancerequest');
const storebalanceresponse = require('../models2/apiresponse/storebalanceresponse');
const ApiResponse = require('../models/response');
const statementResultDesc = require('../models2/apiresponse/statementResultDesc');
const StatementResponse = require('../models2/apiresponse/statementresponse');
const TransactionResultDesc = require('../models2/apiresponse/transactionresultdesc');
const StoreTransactionResponse = require('../models2/apiresponse/storetxnresponse');
const app = express();

app.get('/',(req,res,next) =>{
    res.send("working.....");
})

app.post('/getstorebalance',(req,res,next) =>{
    if(req.body.storeBalRequest){
        var resultDesc = [new StoreResultDesc("Organization Account",14190,"SSP"),new StoreResultDesc("WFP Organization Account",10,"SSP")];
        var CustomerBalanceResponse = new storebalanceresponse(true,"0","success/storeBalRequest success",resultDesc);
        res.status(201).send(CustomerBalanceResponse);
    }
    else{
        res.status(201).send(new storebalanceresponse(false,"303","invalid request method"));
    }
})

app.post('/storestatementrequest',(req,res,next) =>{
    if(req.body.storeStmtRequest){
        var resultDesc = [new statementResultDesc("6BD803VAPE","Completed","SSP","40.00","Withdraw from 211920000001 - test1 test11 test22","20190213140641"),
        new statementResultDesc("6BD703VAPD","Completed","SSP","10.00","Pruchase by 211920000000 - Clement by API","20190213140641"),
        new statementResultDesc("6BD603VAP2","Completed","SSP","10.00","Merchant Store Roll-up to 000002 - DMM","20190213123200"),
        new statementResultDesc("6BD503VAP1","Completed","SSP","10.00","Merchant Store Roll-up to 000002 - DMM","20190213123150"),
        new statementResultDesc("6BD403VAP0","Completed","SSP","10.00","Merchant Store Roll-up to 000002 - DMM","20190213123148")];

        var storestatementresponse = new StatementResponse(true,"0","success/storeStmtRequest success",resultDesc);
        res.status(201).json(storestatementresponse);
    }
    else{
        res.status(201).send(new StatementResponse(false,"303","invalid request method"));
    }
})

app.post('/storetransaction', (req,res,next) =>{
    if(req.body.storeTxn){
        var resultDesc = new TransactionResultDesc("6BE203VBFW","000006 - DMM Store","000002 - DMM","10224.00","14200.00","20190214144741","Completed");
        var storeTransactionResponse = new StoreTransactionResponse(true,"0","success/storeTxn success",resultDesc);
        res.status(201).json(storeTransactionResponse);
    }
    else{
        res.status(201).send(new StatementResponse(false,"303","invalid request method"));
    }
})

module.exports = app;