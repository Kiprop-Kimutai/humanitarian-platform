function BeneficiaryTxnResponse(status,responseCode,cardStatus,responseMessage){
    this.status = status;
    this.responseCode = responseCode;
    this.cardStatus = cardStatus;
    this.responseMessage = responseMessage;
}
module.exports = BeneficiaryTxnResponse;