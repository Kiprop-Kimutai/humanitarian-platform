var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//const api = require('./server/routes/api');
require('./server/models/db');
const api = require('./server/routes/api');
app.use(bodyParser.json());
//app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:false}));

// headers and content type
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/api',api);
//app.use("/hibah/external/api/v1/POS/",api)
//catch all wild routes
app.get('*',(req,res,next) =>{
    res.send("Page not found..oops");
})
//create server
var server = app.listen(process.env.PORT,()=>{
    //var address = "192.168.43.228";
    var port  = server.address().port;
    console.log("server listening at PORT %s",port);
})