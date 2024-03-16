const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();//This router is like a mini express app tied to the other express app or pluggable into the other express appwhich we can export here,

// router.get('/',(req, res, next) => {
//     console.log("running");
//     res.send('<h1>Hello From Express!</h1>');
// }); 
router.get('/',(req, res, next) => {
    //console.log("running");
    const products =adminData.products;
    res.render('shop',{
        prods:products,
        pageTitle: 'Shop',
        path:'/',
        hasProducts:products.length > 0,
        activeShop:true,
        productCSS:true
    });
    //res.sendFile(path.join(rootDir,'views','shop.html'));//'join'used from the path module,builds up a path taht is in the project.if /path is used it wil search for files in taht path in the machine not inside the projet folder
    // __dirname - This is a global variable which simply holds the absolute path on our operating system to this project folder
    //Path join basically detects the operating system you're running on and then automatically builds a correct path.
    //Dir name gives us the path to a file in which we use it and we're using it in the shop.js file in the routes folder.
    //so this will point to the routes folder but views is actually located in a sibling folder to routes.
    //Now the solution is that we add one more segment in there and that is
    //../ and this simply means go up one level,
    //so this will now build a path where it first goes into the folder of these files, so into routes,then it goes up one level then into views,so if it's up one level it's in the root folder then into views and then it serves this
}); 


module.exports = router;