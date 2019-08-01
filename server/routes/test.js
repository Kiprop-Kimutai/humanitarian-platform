const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.status(200).json({code:'000', status: true, message: 'up and running'});
});

router.post('/addcolleague', (req,res) => {
    res.status(201).json({code: '000', status: true, message: 'colleague persisted successfully'})
})
module.exports = router;
