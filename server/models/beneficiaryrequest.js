const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
const beneficiryRequestSchema = new Schema({
    transOperation:String,
    iccid:String,
    transId:{type:String,unique:false},
    requestId:String,
    date:String,
    terminalId:String,
    authMode:String
})
mongoose.model('BeneficiaryRequest',beneficiryRequestSchema);