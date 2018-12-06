const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create txn schema
beneficiaryTxnSchema = new Schema({
    transOperation:{type:String},
    amount:Number,
    debiticcid:{type:String},
    crediticcid:{type:String},
    transId:{type:String,unique:true},
    terminalId:String,
    date:String,
    authMode:String
})

mongoose.model("BeneficiaryTxn",beneficiaryTxnSchema);