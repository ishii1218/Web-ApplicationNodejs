const Product = require('../models/product');
// const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-product',
        activeAddProduct: true,
        productCSS:true,
        formsCSS:true
    })//path can be anything its been checked whether they are equal in main layout file
}

exports.postAddProduct = (req,res,next)=>{//both has /admin so it can be taken to app.js
    // products.push({title: req.body.title});
    //console.log(req.body);
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop',{
            prods:products,
            pageTitle: 'Shop',
            path:'/',
            hasProducts:products.length > 0,
            activeShop:true,
            productCSS:true
        });

    });
    //console.log("running");
    // const products =adminData.products;
   
    //res.sendFile(path.join(rootDir,'views','shop.html'));//'join'used from the path module,builds up a path taht is in the project.if /path is used it wil search for files in taht path in the machine not inside the projet folder
    // __dirname - This is a global variable which simply holds the absolute path on our operating system to this project folder
    //Path join basically detects the operating system you're running on and then automatically builds a correct path.
    //Dir name gives us the path to a file in which we use it and we're using it in the shop.js file in the routes folder.
    //so this will point to the routes folder but views is actually located in a sibling folder to routes.
    //Now the solution is that we add one more segment in there and that is
    //../ and this simply means go up one level,
    //so this will now build a path where it first goes into the folder of these files, so into routes,then it goes up one level then into views,so if it's up one level it's in the root folder then into views and then it serves this
};