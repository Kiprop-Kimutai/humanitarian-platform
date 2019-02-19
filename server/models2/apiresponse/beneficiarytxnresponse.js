const resultDesc = require('../apiresponse/transactionresultdesc');

/*function BeneficiaryTransactionResponse(originalTransId,status,code,message,resultDesc){
    this.originalTransId = originalTransId;
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}*/

function BeneficiaryTransactionResponse(wallet,balance,currency){
    this.wallet = wallet;
    this.balance = balance;
    this.currency = currency;
}

module.exports = BeneficiaryTransactionResponse;

posOfflineTransactionResult = [
    {
        "originalTransId": "BT-dcgffrejhfdjfjkfhjfjfrjfjddf",
        "status": true,
        "code": "0",
        "message": "success/benTxn success",
    },
    {
        "originalTransId": "BT-fcfgffhfrnfefnfdkhgfffjkffkddf",
        "status": true,
        "code": "0",
        "message": "success/benTxn success",
    },
    {
        "originalTransId": "BT-fcfgffhfrnfefnfdkhgfffjkffk3434",
        "status": false,
        "code": "0",
        "message": "Malformed transactions",
    }
];


