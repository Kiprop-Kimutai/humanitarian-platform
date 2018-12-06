var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create prodcuts schema
var productsSchema = new Schema({
iccid:{type:String,unique:true},
programmes:Object,
transId:{type:String,unique:true},
terminalId:String,
date:String
})

mongoose.model("Products",productsSchema);