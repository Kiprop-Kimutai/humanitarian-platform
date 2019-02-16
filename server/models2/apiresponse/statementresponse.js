const resultDesc = require('../apiresponse/statementResultDesc');
function StatementResponse(status,code,message,resultDesc){
    this.status = status;
    this.code = code;
    this.message = message;
    this.resultDesc = resultDesc;
}

module.exports = StatementResponse;
