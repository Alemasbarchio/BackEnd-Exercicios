import productModel from "../models/product-model.js";




const getProducts = async () => {
  let products = await productModel.find();
  products = products.map((product) => product.toJSON());
  return products;

}

const creatProduct = async (product) => {
  let productCreated = await productModel.create(product)
  return productCreated;

}


const deleteProduct = async (code) => {
  const product = await productModel.deleteOne({ code: code });

  if (product.deletedCount == 1) {
    return product;
  }
  else {
    console.log("produto nao existe")
  }

};

const upDateproduct = async (product, pcode) => {
  const productUpdate = await productModel.updateOne({ code: pcode }, { product });
  return productUpdate
}
export default { getProducts, creatProduct, deleteProduct, upDateproduct };