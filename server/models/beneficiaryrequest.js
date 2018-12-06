const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
const beneficiryRequestSchema = new Schema({
    iccid:String,
    transId:{type:String,unique:true},
    requestId:String,
    date:String,
    terminalId:String,
    authMode:String
})
mongoose.model('BeneficiaryRequest',beneficiryRequestSchema);