function StoreBalanceRequest(agentAccountNo,transId,terminalId,authMode,userId,date,requestId){
    this.agentAccountNo = agentAccountNo;
    this.transId = transId;
    this.terminalId = terminalId;
    this.authMode = authMode;
    this.userId = userId;
    this.date = date;
    this.requestId = requestId;
}

module.exports = StoreBalanceRequest;