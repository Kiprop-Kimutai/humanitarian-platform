const customerResultDesc = require('./customerResultDesc');
function LinkCardResponse(status,code,message,customerResultDesc){
    this.status = status;
    this.code = code;
    this.message = message;
    this.customerResultDesc = customerResultDesc;
}

module.exports = LinkCardResponse;