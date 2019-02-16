function resultDesc(ReceiptNumber,TransactionStatus,Currency,Amount,InitiatedTime,Details){
    this.ReceiptNumber = ReceiptNumber;
    this.TransactionStatus = TransactionStatus;
    this.Currency = Currency;
    this.Amount = Amount;
    this.InitiatedTime = InitiatedTime;
    this.Details = Details;
}

module.exports = resultDesc;