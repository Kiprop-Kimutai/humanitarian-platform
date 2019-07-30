const customerResultDesc = require('./customerResultDesc');
function LinkCardResponse(status,code,message,resultDesc){
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}

module.exports = LinkCardResponse;