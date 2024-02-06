const express=require("express");
const productManager=require("./productManager")
const app=express();
const pm= new productManager();
app.get("/products",(req,res)=>{

const productList=pm.readProductsFromFile();
return res.json(productList);
})
module.exports=app;

