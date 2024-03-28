const express = require('express');
const path = require('path');
// const rootDir = require('../util/path');
// const adminData = require('./admin');
const productsController = require('../controllers/products');

const router = express.Router();//This router is like a mini express app tied to the other express app or pluggable into the other express appwhich we can export here,

// router.get('/',(req, res, next) => {
//     console.log("running");
//     res.send('<h1>Hello From Express!</h1>');
// }); 
router.get('/',productsController.getProducts); 


module.exports = router;