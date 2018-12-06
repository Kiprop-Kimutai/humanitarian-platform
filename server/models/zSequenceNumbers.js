var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const zsequenceNumbersSchema = new Schema({
    //"_id" : ObjectId("5aaec88aed2a6735d3745271"),
    _class : {type:String},
    macAddress :{type:String},
    sequenceNo : {type:String},
    token : {type:String,unique:true}
})

mongoose.model("zSequenceNumbers",zsequenceNumbersSchema);