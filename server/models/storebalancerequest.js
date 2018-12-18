function StoreBalanceRequest(transOperation,AgentAccountNo,transId,terminalId,authMode,userId,date){
    this.transOperation = transOperation;
    this.AgentAccountNo = AgentAccountNo;
    this.transId = transId;
    this.terminalId = terminalId;
    this.authMode = authMode;
    this.userId = userId;
    this.date = date;
}
module.exports = StoreBalanceRequest;