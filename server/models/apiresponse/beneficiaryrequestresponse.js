function BeneficiaryRequestResponse(status,responseCode,cardStatus,responseMessage,responseObj){
    this.status = status;
    this.responseCode = responseCode;
    this.cardStatus = cardStatus;
    this.responseMessage = responseMessage;
    this.responseObj = responseObj;
}

module.exports = BeneficiaryRequestResponse;