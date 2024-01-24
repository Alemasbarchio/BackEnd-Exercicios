const entrada = require('prompt-sync')({ sigint: true })


class ProductManager {
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
            productsList.push(produto);
        }
    }
    readData() {
        let title, description,price, stock;
        title = entrada("Digite o nome do produto ");
        description = entrada("Digite o descrição do produto ");
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

    getProductById() {
       let productId= entrada("Digite um código para buscar o produto ")
       const getProduct= productsList.find((produto)=>{
        return productId==produto.code;
       })

       if(getProduct){
        console.log(getProduct)
       }
       else{
        console.log("PRODUTO NÃO ENCONTRADO")
       }
    }
}

const productsList = [];
const newProduct = new ProductManager();
const getProduct=new ProductManager();
let id = 1;
let teclado;
let option = 0;
    while (option != 9) {
       console.log("*--Digite 1 para registrar produtos--*")
       console.log("*--Digite 2 para pesquisar produtos--*")
       console.log("*--Digite 3 para exibir os produtos--*")
       console.log("*--Digite 9 para sair--*")
       teclado= entrada(" ESCOLHA UMA OPÇÃO ")
       option = parseInt(teclado);

    switch (option){

        case 1:
            newProduct.addProduct();
            id = id + 1;
            break;
            case 2: getProduct.getProductById();
            break;
            case 3:
                if(productsList.length==0){
                    console.log("AINDA NÃO HÁ PRODUTOS CADASTRADOS")
                }
                else{
                    console.log(productsList);
                }
                break;
       }
   }
