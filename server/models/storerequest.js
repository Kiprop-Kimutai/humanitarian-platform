const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
var storeRequestSchema = new Schema({
    storeAccount:String,
    transId:{type:String,unique:true},
    requestId:String,
    date:String,
    terminalId:String,
    authMode:String
})
mongoose.model('StoreRequest',storeRequestSchema);