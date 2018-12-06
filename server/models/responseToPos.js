var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var resposetoposSchema = new Schema({
    //"_id" : ObjectId("5aaba597ed2a6724b1d4c5bb"),
    _class : {type:String},
    command: {type:String},
    macAddress : {type:String},
    nextUrl : {type:String},
    responseCode : {type:String},
    responseMessage : {type:String},
    //dateSent:{type:Date},
    data : {type:String}
})

resposetoposSchema.methods.logDetails = function(){
    //do any schema operations in this prototype
}
mongoose.model("responseToPos",resposetoposSchema);

