function UserResponse(status,responseCode,responseMessage,responseObj){
    this.status = status;
    this.responseCode = responseCode;
    this.responseMessage = responseMessage;
    this.responseObj = responseObj
}
module.exports = UserResponse;