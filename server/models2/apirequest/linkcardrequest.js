function LinkCardRequest(iccid,transId,requestId,date,terminalId,authMode,cardIdentifier,userId){
    this.iccid = iccid;
    this.transId = transId;
    this.requestId = requestId;
    this.date = date;
    this.terminalId = terminalId;
    this.authMode = authMode;
    this.cardIdentifier = cardIdentifier;
    this.userId = userId;
}
module.exports = LinkCardRequest;