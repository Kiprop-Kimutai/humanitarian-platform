const express = require('express');
const CustomerBalanceRequest = require('../models2/apirequest/customerbalancerequest');
const CustomerBalanceResponse = require('../models2/apiresponse/customerbalanceresponse');
const CustomerResultDesc = require('../models2/apiresponse/customerResultDesc');
const LinkCardResponse = require('../models2/apiresponse/linkcardresponse');
const StatementResponse  = require('../models2/apiresponse/statementresponse');
const statementResultDesc = require('../models2/apiresponse/statementResultDesc');
const TransactionResultDesc = require('../models2/apiresponse/transactionresultdesc');
const CustomerTransactionResponse = require('../models2/apiresponse/beneficiarytxnresponse');
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

app.post('/beneficiarystatementrequest',(req,res,next) =>{
    if(req.body.benfStmtRequest){
        var resultDesc = [new statementResultDesc("5LF603V5IO","Completed","SSP","12.00","20181215081224","Send Money to 211920000001 - Clement by API2")];
        var statementresponse = new StatementResponse(true,"0","success/benfStmtRequest success",resultDesc);
        res.status(201).json(statementresponse);
    }
    else{
        res.status(201).send(JSON,stringify(new CustomerBalanceResponse(false,0,"invalid request body")));
    }
})

app.post('/beneficiarytransaction',(req,res,next) =>{
    if(req.body.benTxn){
        var resultDesc = new TransactionResultDesc("6BE003VBFU","211920000000 - Clement by API","000006 - DMM Store","61864.00","10194.00","20190214144709","Completed");
        var resultDesc1 =  new TransactionResultDesc("6BE103VBFV","211920000001 - test1 test11 test22","000006 - DMM Store","8832.00","10234.00","20190214144711","Completed");
        var customerTransaction =[new CustomerTransactionResponse("BT-fcfgffhfrnfefnfdkhgfffjkffkddf",true,"0","success/benTxn success",resultDesc),
                                  new CustomerTransactionResponse("BT-dcgffrejhfdjfjkfhjfjfrjfjddf",true,"0","success/benTxn success",resultDesc1)];

        res.status(201).json(customerTransaction);
    }
    else{
        res.status(201).send(JSON.stringify(new CustomerBalanceResponse(false,0,"invalid request body")));
    }
})
module.exports = app;