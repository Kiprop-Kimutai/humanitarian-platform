var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var tms_upload_files_schema = new Schema({
    //_id : ObjectId("5aaf70fded2a6735d3745272"),
    _class : {type:String},
    macAddress: String,
    dateUploaded : String,
    filename:{type:String,unique:true},
    token : {type:String},
    flag : String,
    valueTransactionCount : {type:String},
    valueTransactionAmount : {type:String},
    valueTransactionVoidCount : {type:String},
    valueTransactionVoidAmount : {type:String},
    commodityTransactionCount : {type:String},
    commodityTransactionAmount: {type:String},
    commodityTransactionVoidCount : {type:String},
    commodityTransactionVoidAmount : {type:String},
    firstReceiptNo: {type:String},
    lastReceiptNo : {type:String}
})

tms_upload_files_schema.methods.logDetails = function(){
    //do anything here. This is just an example of schema methods
}
mongoose.model('tms_upload_files',tms_upload_files_schema);