const resultDesc = require('../apiresponse/transactionresultdesc');

function BeneficiaryTransactionResponse(originalTransId,status,code,message,resultDesc){
    this.originalTransId = originalTransId;
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}
module.exports = BeneficiaryTransactionResponse;