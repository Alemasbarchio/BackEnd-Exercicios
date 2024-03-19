import mongoose from "mongoose"
const productColleciton="produtos"
const productSchema= new mongoose.Schema({
title:String,
description: String,
price: Number,
code: Number,
stock: Number,
thumbNail: String

})
const productModel= mongoose.model(productColleciton,productSchema);

export default productModel;