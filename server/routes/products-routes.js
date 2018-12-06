var express = require('express');
var mongoose = require('mongoose');
var Products = mongoose.model('Products');
var ApiResponse = require('../models/response');
var app  = express();

app.get("/",(req,res,next) =>{
    res.send("products works..");
})

app.post("/update",(req,res,next) =>{
    var product = new Products(req.body.productUpdate);
    product.save((err) =>{
        if(err){
        console.error(err);
        res.json(new ApiResponse(false,"Error updating prodcut"));
        }
        else{
            res.json(new ApiResponse(true,"success",[{"100":2200}]));
        }
    })
})
module.exports = app;