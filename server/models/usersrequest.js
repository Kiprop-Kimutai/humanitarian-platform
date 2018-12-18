var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create prodcuts schema
var usersreqSchema = new Schema({
	posSerialNumber:String,
	posSoftwareVersion:String,
	posdDateTime: String,
	deviceMacAddress: String
})

mongoose.model("UsersRequest",usersreqSchema);