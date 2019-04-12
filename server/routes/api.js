var express = require('express');
require('../models/db');
var app = express();    
var FirmwareRoutes = require('./firmware-routes');
const DeviceRoutes = require('./device-routes');
const TMSUploadFilesRoutes = require('./tms_upload_files-routes');
const ZsequenceNumberRoutes = require('./zsequencenumbers-routes');
const ResponseToPOSRoutes = require('./responsetoPos-routes');
const BeneficiaryRoutes = require('./beneficiary-routes');
const ProductRoutes = require('./products-routes');
const BeneficiaryTxnRoutes = require('./beneficiary-transactions-routes');
const StoreTxnRoutes = require('./storetxn-routes');
const BeneficiaryRequestRoutes = require('./beneficiaryrequest-routes');
const StoreRequestRoutes = require('./storerequestroutes');
const UsersRequestRoutes = require('./users');


/******************v2 API**************** */
const CustomerRoutes = require('./customerroutes');
const StoreRoutes = require('./store-routes');
app.get('/',(req,res,next)=>{
    res.send("ok...");
})
app.use('/firmware_routes',FirmwareRoutes);
app.use('/device_routes',DeviceRoutes);
app.use('/tms_file_routes',TMSUploadFilesRoutes);
app.use('/zsequence_routes',ZsequenceNumberRoutes);
app.use('/scope_response_routes',ResponseToPOSRoutes);
app.use('/beneficary_routes',BeneficiaryRoutes);
app.use('/products',ProductRoutes);
app.use('/storetxn',StoreTxnRoutes);
app.use('/beneficiaryrequest',BeneficiaryRequestRoutes);
app.use('/beneficiarytxn',BeneficiaryTxnRoutes);
app.use('/storerequest',StoreRequestRoutes);
app.use('/users',UsersRequestRoutes);
app.use('/customers',CustomerRoutes);
//app.use('/storerequest',StoreRoutes);
app.use('/organization',StoreRoutes);
module.exports = app;