const express = require('express');

const path = require('path');

const productsController = require('../controllers/products');
// const rootDir = require('../util/path');//goes to path.js in util

const router = express.Router();//This router is like a mini express app tied to the other express app or pluggable into the other express appwhich we can export here,

// const products = [];

router.get('/add-product',productsController.getAddProduct);//when ever a request is sent to this address execute this
router.post('/add-product',productsController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;