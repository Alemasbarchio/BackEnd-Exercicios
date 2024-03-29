
import * as fs from "fs/promises";
import path from "path";
import url from "url";

class ProductManager {
    #__filename = url.fileURLToPath(import.meta.url);
    #__dirname = path.dirname(this.#__filename);
    #pathData = path.resolve(this.#__dirname, "../data/produto.json");
    
     constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        
    }

    addProduct=async(product)=> {
       let produto = this.readData(product);
        if (this.checkData(produto)) {
          await  this.saveProductToFile(produto);
        }
    }

    readData(reqBody) {
        const{title, description, price,stock,thumbnail,code}=reqBody;
        const product_title =title;
        const product_desc = description;
        const product_price = price;
        const product_thumb =thumbnail;
        const product_code =code;
        const product_stock = stock;
        let produto = new ProductManager(
            product_title,
            product_desc,
            product_price,
            product_thumb,
            product_code,
            product_stock
        )
        return produto;
    
        
    }

    checkData(produto) {
        if (
            produto.title === "" ||
            produto.description === "" ||
            produto.price === null ||
            produto.thumbnail === "" ||
            produto.stock === null ||
            produto.code === null
        ) {
            console.log("Erro: Produto com valores vazios ou nulos encontrado!");
            return false;
        } else {
            console.log("Produto válido!");
            return true;
        }
    }

    saveProductToFile=async(product)=> {
        let productsList = await this.readProductsFromFile();
        const id = productsList.length > 0 ? productsList[productsList.length - 1].id + 1 : 1;
        product.id=id;
        productsList.push(product);
       await fs.writeFile(this.#pathData, JSON.stringify(productsList));
        console.log('Produto salvo com sucesso!');
    }

    readProductsFromFile=async()=> {
        try {
            const data = await fs.readFile(this.#pathData, 'utf8');
            const parsedData = JSON.parse(data);
    
            if (Array.isArray(parsedData)) {
                return parsedData;
            } else {
                return [];
            }
        } catch (err) {
            return [];
        }
    }


    upDateProduct() {
        let productId = entrada("Digite um código de produto para atualizar ");
        const productsList = this.readProductsFromFile();
        const index = productsList.findIndex((produto) => productId == produto.id);
        if (index !== -1) {
            console.log(productsList[index]);
            let updatedProduct = this.readData();
            updatedProduct.id=parseInt(productId);
            productsList[index] = updatedProduct;
            fs.writeFile(this.#pathData, JSON.stringify(productsList));
            console.log('Produto atualizado com sucesso!');
        } else {
            console.log("PRODUTO NÃO ENCONTRADO");
        }
    }
    deleteProductById = async (productId) => {
        let productsList = await this.readProductsFromFile();
        let updatedProductsList = productsList.filter(
          (produto) => produto.code != +productId
        );
    
        if (updatedProductsList.length < productsList.length) {
          fs.writeFile(this.#pathData, JSON.stringify(updatedProductsList));
          console.log("Produto excluído com sucesso!");
          return true;
        } else {
          console.log("PRODUTO NÃO ENCONTRADO");
          return false;
        }
      };
    
    getProductById= async(productId)=> {
        const productsList = await this.readProductsFromFile();
        const getProduct = productsList.find((produto) => +productId === produto.id);
        return getProduct;
       
    }
}
 export default ProductManager;

