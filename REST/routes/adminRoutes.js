const express = require('express');
const router = express.Router();
const path = require('path');
//const adminController = require('../controllers/adminController');

//router.get("/add-product"/*, adminController.addProduct*/)
router.get('/add-product',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'../../','views','add-product.html'))
        
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;