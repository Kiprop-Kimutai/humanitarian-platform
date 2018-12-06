var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create beneficiary schema

var beneficiarySchema = new Schema({
    firstname:{type:String},
	middlename:{type:String},
	lastname:{type:String},
	dob:{type:String},
	gender:{type:String},
	householdSize:String,
    docType:String,
	docNumber:String,
	address:String,
	iccid:{type:String,unique:true},
	products:Object,
	transId:String,
	terminalId:String,
	date:String,
	operator:String
})

//schema methods here
beneficiarySchema.methods.logger = function(){
    //do anything
}
mongoose.model('Beneficiary',beneficiarySchema);