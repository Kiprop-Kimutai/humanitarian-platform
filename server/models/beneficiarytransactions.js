const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create txn schema
beneficiaryTxnSchema = new Schema({
    transOperation:{type:String},
    amount:Number,
    debitAccountNo:{type:String},
    creditAccountNo:{type:String},
    transId:{type:String,unique:false},
    walletID:{type:String},
    walletBalance:String,
    terminalId:String,
    date:String,
    authMode:String
})

mongoose.model("BeneficiaryTxn",beneficiaryTxnSchema);