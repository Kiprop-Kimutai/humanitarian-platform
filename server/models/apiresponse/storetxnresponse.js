function StoreTxnResponse(status,code,balanceBefore,balanceAfter,message){
    this.status = status;
    this.code = code;
    this.balanceBefore = balanceBefore;
    this.balanceAfter = balanceAfter;
    this.message = message
}

module.exports = StoreTxnResponse;