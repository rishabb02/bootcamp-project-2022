import { Express, Request, response, Response } from "express";
import cors from "cors";
const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
import router from "./routes/recipe"

const mongoose = require("mongoose");
const connection_url = "mongodb+srv://rishabb02:Rishabb123@cluster0.9cjzpwf.mongodb.net/recipeDB?retryWrites=true&w=majority"
mongoose.connect(connection_url)
.then(() => console.log("Successfully connected"))
.catch((error: Error)=> console.error("Could not connect due to ${error}"));

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/api", router);

app.listen(3001);

//mongodb+srv://rishabb02:Rishabb123!@cluster0.9cjzpwf.mongodb.net/recipeDB?retryWrites=true&w=majority" --apiVersion 1 --username 
//mongodb+srv://ddavid01:Dom251rocks@cluster0.wyiqo2g.mongodb.net/RecipesDB?retryWrites=true&w=majority"