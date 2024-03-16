//const http = require('http');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

//(ctrl+express) goes to the source file which is a typescript file

const app = express();//since in the source file it is exported as a function

// app.engine('hbs',
// expressHbs({
//     layoutsDir:'views/layouts/',
//     defaultLayout:'main-layout',
//     extname:'hbs'
// }));//initialise the handlebars view engine//so now we're setting the extension to hbs for layouts too



// app.set('view engine','hbs');
//app.set('view engine','pug');//for pug veiw engine
app.set('view engine','ejs');
app.set('views','views');
//App set allows us to set any values globally on our express application and this can actually also be keys or configuration items express doesn't understand,
//View engine allows us to tell express hey for any dynamic templates we're trying to render and there
//will be a special function for doing that,please use this engine we're registering here and views allows us to tell express where to find these dynamic views. So what we can do here is we can app set and set the view here,
//So now we're telling express that we want to compile dynamic templates with the pug engine and where to find these templates.
const adminData = require('./routes/admin');//imports router object in admin file
const shopRoutes = require('./routes/shop');
// app.use((req, res, next) => {
//     console.log('In the Middleware')
//     next();//allows the request to continue to the next middleware in line
// });

// app.use('/add-product',(req, res, next) => {
//     console.log('In another Middleware')
//     res.send('<h1>ADD Product Page</h1>');
// });
app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname,'public'))); //gives a folder read access

// app.use('/add-product',(req, res, next) => {
//     //console.log('In anotherrrr Middleware')
//     res.send('<form action="/product" method = "POST"><input type = "text" name = "title"><button type ="submit">Add Product</button></form>');
// });
// app.post('/product',(req,res,next)=>{
//     //console.log('running');
//     console.log(req.body);
//     res.redirect('/');
// });
app.use('/admin',adminData.routes);//admin is a filter only url with /admin willrun
app.use(shopRoutes);

app.use((req,res,next) =>{
    res.status(404).render('404',{pageTitle:'Page Not Found'});

});
// app.use('/',(req, res, next) => {
//     res.send('<h1>Hello From Express!</h1>');
// }); 

// const serv er = http.createServer(app);
// server.listen(3000);
app.listen(3000);//in expressjs this is an inbuilt function so just calling this wil do the above process