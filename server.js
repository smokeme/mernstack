#!/usr/bin/env nodejs
//Imports
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import items from "./routes/api/items";
import path from "path";
// DB Config
import { monogoURL } from "./config/keys";
const app = express();
const port = 80;

// Bodyparser Middleware
app.use(bodyParser.json());
app.listen(port, () => console.log(`Server started on port ${port}`));

mongoose
  .connect(monogoURL)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Routes

app.use("/api/items", items);
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
