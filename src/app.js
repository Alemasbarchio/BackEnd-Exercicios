const express = require("express");
const productManager = require("./productManager")
const app = express();
const pm = new productManager();
app.use(express.json());

app.get("/products", async (req, res) => {
    try {
        const productsList = await pm.readProductsFromFile();
        let limit = req.query.limit;

        if (limit) {
            const limitedList = productsList.slice(0, +limit);
            return res.status(200).json(limitedList);
        } else {
            return res.status(200).json(productsList);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro ao consultar produtos" });
    }
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const searchProduct = await pm.getProductById(id);
        if (searchProduct) {
            return res.status(200).json(searchProduct);
        } else {
            res.status(404).json({ error: "Produto não encontrado" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro " });
    }

})


app.post("/products", async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, stock } = req.body;
        await pm.readData(req.body);
        await pm.addProduct(req.body);

        return res.status(201).json({ message: "Produto Cadastrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar produto" });
    }
});

module.exports = app;

