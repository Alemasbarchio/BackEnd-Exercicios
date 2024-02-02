const entrada = require('prompt-sync')({ sigint: true });
const fs = require('fs');

class ProductManager {
    #pathData = "./data/produto.json"
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    addProduct() {
        let produto = this.readData();
        if (this.checkData(produto)) {
            this.saveProductToFile(produto);
        }
    }

    readData() {
        let title, description, price, stock;
        title = entrada("Digite o nome do produto ");
        description = entrada("Digite a descrição do produto ");
        price = entrada("Digite o preço do produto ");
        stock = entrada("Digite a quantidade de estoque ");
        const product_title = title;
        const product_desc = description;
        const product_price = price;
        const product_thumb = "caminho da imagem produto " + id;
        const product_code = id;
        const product_stock = stock;
        let produto = new ProductManager(
            product_title,
            product_desc,
            product_price,
            product_thumb,
            product_code,
            product_stock
        );
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

    saveProductToFile(product) {
        let productsList = this.readProductsFromFile();
        productsList.push(product);
        fs.writeFileSync(this.#pathData, JSON.stringify(productsList));
        console.log('Produto salvo com sucesso!');
    }

    readProductsFromFile() {
        try {
            const data = fs.readFileSync(this.#pathData, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            return [];
        }
    }


    upDateProduct() {
        let productId = entrada("Digite um código de produto para atualizar ");
        const productsList = this.readProductsFromFile();
        const index = productsList.findIndex((produto) => productId == produto.code);

        if (index !== -1) {
            console.log(productsList[index]);
            let updatedProduct = this.readData();
            productsList[index] = updatedProduct;
            fs.writeFileSync(this.#pathData, JSON.stringify(productsList));
            console.log('Produto atualizado com sucesso!');
        } else {
            console.log("PRODUTO NÃO ENCONTRADO");
        }
    }
    deleteProductById() {
        let productId = entrada("Digite um código para excluir o produto ");
        let productsList = this.readProductsFromFile();
        let updatedProductsList = productsList.filter((produto) => productId != produto.code);

        if (updatedProductsList.length < productsList.length) {
            fs.writeFileSync(this.#pathData, JSON.stringify(updatedProductsList));
            console.log('Produto excluído com sucesso!');
        } else {
            console.log("PRODUTO NÃO ENCONTRADO");
        }
    }

    getProductById() {
        let productId = entrada("Digite um código para buscar o produto ");
        const productsList = this.readProductsFromFile();
        const getProduct = productsList.find((produto) => productId == produto.code);
   
        if (getProduct) {
            console.log(getProduct);
        } else {
            console.log("PRODUTO NÃO ENCONTRADO");
        }
    }
}

let id = 1;
let teclado;
let option = 0;
const newProduct = new ProductManager();

while (option != 9) {
    console.log("*--Digite 1 para registrar produtos--*");
    console.log("*--Digite 2 para pesquisar produtos--*");
    console.log("*--Digite 3 para exibir os produtos--*");
    console.log("*--Digite 4 para Atualizar produtos--*");
    console.log("*--Digite 5 para Excluir produtos--*");
    console.log("*--Digite 9 para sair--*");
    teclado = entrada(" ESCOLHA UMA OPÇÃO ");
    option = parseInt(teclado);

    switch (option) {
        case 1:
            newProduct.addProduct();
            id = id + 1;
            break;
        case 2:
            newProduct.getProductById();
            break;
        case 3:
            const productsList = newProduct.readProductsFromFile();
            if (productsList.length == 0) {
                console.log("AINDA NÃO HÁ PRODUTOS CADASTRADOS");
            } else {
                console.log(productsList);
            }
            break;
        case 4:
            newProduct.upDateProduct();
            break;
        case 5:
            newProduct.deleteProductById();
            break;
    }
}
