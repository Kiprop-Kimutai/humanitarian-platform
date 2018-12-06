/*var ApiResponse = new Object({
    response_code:Number,
    response_message:String
})

module.exports = ApiResponse;*/

function ApiResponse(status,message){
    this.status = status;
    this.message =message;
}
function ApiResponse(status,message,balances){
    this.status = status;
    this.message =message;
    this.balances = balances;
}
module.exports = ApiResponse;