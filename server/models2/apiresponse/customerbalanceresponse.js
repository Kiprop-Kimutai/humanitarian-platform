const resultDesc = require('./customerResultDesc');
function CustomerBalanceResponse(status,code,message,resultDesc){
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}

module.exports = CustomerBalanceResponse;