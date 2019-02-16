const resultDesc = require('./customerResultDesc');
function StoreBalanceResponse(status,code,message,resultDesc){
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}
module.exports = StoreBalanceResponse;