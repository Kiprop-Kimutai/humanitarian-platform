function CustomerBalanceRequest(iccid,transId,requestId,date,terminalId,authMode,userId){
    this.iccid = iccid;
    this.transId = transId;
    this.requestId = requestId;
    this.date = date;
    this.terminalId = terminalId;
    this.authMode = authMode;
    this.userId = userId;
}
module.exports = CustomerBalanceRequest;