import productModel from "../models/product-model.js";

const getProductById = async (code) => {
  try {
      const product = await productModel.findOne({ code: code });
      if (product) {
          const productJSON = product.toJSON();
          return productJSON;
      } else {
          return null;
      }
  } catch (error) {
      console.log(error);
      throw error; 
  }
};


const getProducts = async () => {

  try {
    let products = await productModel.find();
  products = products.map((product) => product.toJSON());
  return products;
  } catch (error) {
    console.log(error)
  }
  
}

const creatProduct = async (product) => {
  try {
    let productCreated = await productModel.create(product)
  return productCreated;
    
  } catch (error) {
    console.log(error);
  }
}

const deleteProduct = async (code) => {

  try {
    const product = await productModel.deleteOne({ code: code });
    console.log(product);
    return product;
         
  } catch (error) {
    console.log(error);
  }
   
};

const upDateproduct = async (productData, code) => {
  const productUpdate = await productModel.updateOne({ code: code },  productData);
  console.log(productUpdate);
  return productUpdate
}
export default { getProducts, creatProduct, deleteProduct, upDateproduct,getProductById };