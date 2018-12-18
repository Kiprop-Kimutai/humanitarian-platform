const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
storetxnSchema = new Schema({
    transOperation:String,
	debitAccountNo:String,
	creditAccountNo:String,
	amount:Number,
	transId:{type:String,unique:true},
	terminalId:{type:String},
	authMode:String,
	userId:String,
	date:String
})
mongoose.model('StoreTxnSchema',storetxnSchema);