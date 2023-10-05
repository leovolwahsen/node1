import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Product } from "./models/productModule.js";
dotenv.config();

const { MONGODB_URI, MONGO_PW } = process.env;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello my API");
});

app.get("/blog", (request, response) => {
  response.send("Hello Blog");
});

app.get("/products", async (request, response) => {
    try {
        const products = await Product.find({});
        response.status(200).json(products);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
});

app.get("/products/:id", async(request, response) => {
    try {
        const {id} = request.params;
        const product = await Product.findById(id);
        response.status(200).json(product);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
});

app.post("/products", async (request, response) => {
    try {
        const product = await Product.create(request.body);
        response.status(200).json(product);
    } catch(error) {
        console.log(error);
        response.status(500).json({message: error.message});
    }
});

mongoose
  .connect(`mongodb+srv://${MONGODB_URI}:${MONGO_PW}@cluster0.a8iwmib.mongodb.net/NodeAPI`)
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log(`API is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
