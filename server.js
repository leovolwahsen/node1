import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const { MONGODB_URI, MONGO_PW } = process.env;
const app = express();

// routing
app.get("/", (request, response) => {
  response.send("Hello my API");
});

app.get("/blog", (request, response) => {
  response.send("Hello Blog");
});

mongoose
  .connect(`${MONGODB_URI}${MONGO_PW}@cluster0.a8iwmib.mongodb.net/NodeAPI`)
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log(`API is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
