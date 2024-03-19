import express from "express";
const productRouter = express.Router();
//import productManager from"../productManager.js";
//const pm = new productManager();
import productService from "../dao/service/product-service.js";


productRouter.get("/realtimeproducts", async (req, res) => {
    try {
        const product = await productService.getProducts();
        res.render("products", { title: "Produtos em Tempo Real", product });


    } catch (error) {
        res.status(500).json({ error: "Erro ao consultar produtos" });

    }

})

productRouter.post("/realtimeproducts", async (req, res) => {
    const product = req.body;
    await productService.creatProduct(product);
    res.redirect("/realtimeproducts")
})

productRouter.delete("/realtimeproducts/:code", async (req, res) => {
    const { code } = req.params;
    await productService.deleteProduct(code);
    res.redirect("/realtimeproducts")
});


productRouter.put("/realtimeproducts/:pcode", async (req, res) => {
    const { pcode } = req.params;
    const productData = req.body;
    console.log(pcode);
    try {
        const updatedProduct = await productService.upDateproduct(productData, pcode);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Erro ao atualizar o produto:', error);
        res.status(500).json({ error: "Erro ao atualizar o produto." });
    }
});


// #region modelo persistencia FileSystem exer 3 & 4
// productRouter.get("/", async (req, res) => {

//     try {
//         const productsList = await pm.readProductsFromFile();
//         let limit = req.query.limit;

//         if (limit) {
//            const limitedList = productsList.slice(0, +limit);
//            return res.render("home", { title: "Lista de Produtos", limitedList});
//         } else {
//            return res.render("home", { title: "Lista de Produtos", productsList});

//        }
//     } catch (error) {
//         console.error("Erro ao carregar dados do arquivo JSON:", error);
//         res.status(500).json({ error: "Erro ao consultar produtos" });
//     }
// });

// #region Modelo persistencia FileSystem exer 3 & 4
// productRouter.get("/products/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const searchProduct = await pm.getProductById(id);
//         if (searchProduct) {
//              res.render("home", { title: "Lista de Produtos", searchProduct});

//         } else {
//             res.render("home", {error:"teste" });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Erro " });
//     }

// })

// #region Modelo persistência FileSystem exer 3 & 4
// productRouter.get("/realtimeproducts", async (req, res) => {

//     try {
//         const productsList = await pm.readProductsFromFile();
//         res.render("products", { title: "Produtos em Tempo Real", productsList });

//     } catch (error) {
//         console.error("Erro ao carregar dados do arquivo JSON:", error);
//         res.status(500).json({ error: "Erro ao consultar produtos" });
//     }   
// });

// #end


// #region Modelo persistência FileSystem exer 3 & 4
// productRouter.post("/realtimeproducts", async (req, res) => {
//     try {
//         const { title, description, price, thumbnail, code, stock } = req.body;
//         await pm.readData(req.body);
//         await pm.addProduct(req.body);
//         const productsList = await pm.readProductsFromFile();
//         res.render("products", { title: "Produtos em Tempo Real", productsList });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Erro ao cadastrar produto" });
//     }

// });

// #region Modelo persistência FileSystem exer 3 & 4
//  productRouter.delete("/realtimeproducts/:id", async (req, res) => {
//      const id = req.params.id;

//     try {
//       await pm.deleteProductById(id);
//       res.status(201).json({ message: "Produto deletado com sucesso" });     } catch (error) {
//        console.log(error);
//        res.status(500).json({ error: "Erro ao deletar produto." });     }
//    });

export default productRouter;