import express from"express";
const productRouter = express.Router();
import productManager from"../productManager.js";
const pm = new productManager();



productRouter.get("/", async (req, res) => {
    try {
        const productsList = await pm.readProductsFromFile();
        
        let limit = req.query.limit;
        
        if (limit) {
           const limitedList = productsList.slice(0, +limit);
           return res.render("home", { title: "Lista de Produtos", limitedList});
        } else {
           return res.render("home", { title: "Lista de Produtos", productsList});
          
       }
    } catch (error) {
        console.error("Erro ao carregar dados do arquivo JSON:", error);
        res.status(500).json({ error: "Erro ao consultar produtos" });
    }
});

productRouter.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const searchProduct = await pm.getProductById(id);
        if (searchProduct) {
             res.render("home", { title: "Lista de Produtos", searchProduct});
            
        } else {
            res.render("home", {error:"teste" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro " });
    }

})




productRouter.get("/realtimeproducts", async (req, res) => {
    try {
        const productsList = await pm.readProductsFromFile();
        res.render("products", { title: "Produtos em Tempo Real", productsList });
      
    } catch (error) {
        console.error("Erro ao carregar dados do arquivo JSON:", error);
        res.status(500).json({ error: "Erro ao consultar produtos" });
    }
});




productRouter.post("/realtimeproducts", async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock } = req.body;
        await pm.readData(req.body);
        await pm.addProduct(req.body);
        const productsList = await pm.readProductsFromFile();
        res.render("products", { title: "Produtos em Tempo Real", productsList });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar produto" });
    }
});


productRouter.delete("/realtimeproducts/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      await pm.deleteProductById(id);
      res.status(201).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao deletar produto." });
    }
  });

export default productRouter;