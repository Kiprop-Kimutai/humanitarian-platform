const resultDesc = require('../apiresponse/transactionresultdesc');

function StoreTransactionResponse(status,code,message,resultDesc){
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}

module.exports = StoreTransactionResponse