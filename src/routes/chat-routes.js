import express from "express";
const chatRouter = express.Router();

import chatServices from "../dao/service/chat-services.js";

chatRouter.get("/chat", async (req, res) => {
    res.render("chat");
})

chatRouter.post("/chat", async (req, res) => {
    const userData = req.body;

    await chatServices.createUser(userData);
    res.render("chat");
})



export default chatRouter;