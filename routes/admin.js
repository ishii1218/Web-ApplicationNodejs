const express = require('express');

const path = require('path');
const rootDir = require('../util/path');//goes to path.js in util

const router = express.Router();//This router is like a mini express app tied to the other express app or pluggable into the other express appwhich we can export here,

const products = [];

router.get('/add-product',(req, res, next) => {
    res.render('add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-product',
        activeAddProduct: true,
        productCSS:true,
        formsCSS:true
    })//path can be anything its been checked whether they are equal in main layout file
});
router.post('/add-product',(req,res,next)=>{//both has /admin so it can be taken to app.js
    products.push({title: req.body.title});
    //console.log(req.body);
    res.redirect('/');
});

//module.exports = router;
exports.routes = router;
exports.products = products;