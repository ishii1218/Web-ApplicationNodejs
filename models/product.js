
const fs = require ('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename ), 
    'data',
    'products.json'
);

const getProdunctsFromFile  = (cb) => {
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);//pass an empty array
        }
        else{
            cb(JSON.parse(fileContent)); 
        }
        // cb(JSON.parse(fileContent)); 
        // So to return it as an array, you need to call json parse.
    })
}
// const products =[];
//creating a class Product
module.exports = class Produnct{
    constructor(t){
        this.title = t;
    }

    save(){
        // const p = path.join(
        //     path.dirname(process.mainModule.filename ), 
        //     'data',
        //     'products.json'
        // );
        getProdunctsFromFile(products => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                // console.log(err);
            });
        });
        // fs.readFile(p,(err,fileContent)=>{
            // let products = [];
            // if(!err){
            //     products = JSON.parse(fileContent);
            // }
            // products.push(this);
            // fs.writeFile(p,JSON.stringify(products),(err)=>{
            //     console.log(err);
            // });
            //and since that is a json file, I will store it in json format there so then I will set products equal to json which is a helper object existing in vanilla nodejs,so you don't need to define this on your own
            // and there we have the parse method which takes incoming json and gives us back a javascript array or object or whatever is in the file.
            // console.log(err); 
        // });
        // products.push(this);
    }// I want to store my product in this array and I can do this by reaching out to products and then calling

    static fetchAll(cb){//cb is a functoin parsed in to fetchAll
        getProdunctsFromFile(cb);
        
        // const p = path.join(
        //     path.dirname(process.mainModule.filename ), 
        //     'data',
        //     'products.json'
        // );
        // fs.readFile(p,(err,fileContent)=>{
        //     if(err){
        //         cb([]);//pass an empty array
        //     }
        //     cb(JSON.parse(fileContent)); 
        //     // So to return it as an array, you need to call json parse.
        // })
        // return products;
    }
    //static is used to makes sure that I can call this method directly on the class itself and not on an instantiated object


}

    