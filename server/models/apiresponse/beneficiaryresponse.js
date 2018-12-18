function BeneficiaryResponse(status,responseCode,cardStatus,responseMessage,balances){
    this.status = status;
    this.responseCode = responseCode;
    this.cardStatus = cardStatus;
    this.responseMessage = responseMessage;
    this.balances = balances;
}
module.exports=BeneficiaryResponse;