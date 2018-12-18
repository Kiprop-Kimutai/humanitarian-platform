var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create beneficiary schema

var beneficiarySchema = new Schema({
	firstname: String,
	middlename: String,
	lastname: String,
	dob: String,
	gender: String,
	docType:{type:String,unique:false},
	docNumber:{type:String,unique:true},
	address: String,
	iccid: {type:String,unique:false},
	transId: {type:String,unique:true},
	terminalId:String,
	date: String,
	operator:String
})

//schema methods here
beneficiarySchema.methods.logger = function(){
    //do anything
}
mongoose.model('Beneficiary',beneficiarySchema);