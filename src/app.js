
import express from "express";
import productRouter from "./routes/products.routes.js";
import { engine } from "express-handlebars"
import __dirname from "./utils.js";
import viewsRoutes from "./routes/products.routes.js"

const app = express();
app.use(express.static(__dirname + "/../public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use("/", viewsRoutes);

import { Server as socketIO } from "socket.io"
import http from "http";

const server = http.createServer(app);
const io = new socketIO(server);

import productManager from "./productManager.js";
const pm = new productManager();

io.on("connection", (socket) => {

    // Emitir os dados para os clientes conectados quando houver uma mudança
    const sendUpdatedProducts = async () => {
        const productsList = await pm.readProductsFromFile();
        io.emit("produtosAtualizados", { producList: productsList });

    };
    socket.on("delete", (data) => {
        pm.deleteProductById(data);
    })

    sendUpdatedProducts();
});





export default server;



