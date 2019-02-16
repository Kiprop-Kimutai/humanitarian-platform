function TransactionResultDesc(transID,debitPartyName,creditPartyName,debitAccountBalance,
    creditAccountCurrentBalance,finalizedTime,transactionStatus){
        this.transID = transID;
        this.debitPartyName = debitPartyName;
        this.creditPartyName = creditPartyName;
        this.debitAccountBalance = debitAccountBalance;
        this.creditAccountCurrentBalance = creditAccountCurrentBalance;
        this.finalizedTime = finalizedTime;
        this.transactionStatus = transactionStatus;
}

module.exports = TransactionResultDesc;