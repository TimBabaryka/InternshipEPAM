import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import cloudRouter from "./cloud/cloudRouter.js";
import { PORT, DB_URL } from "./config.js";
const port = PORT || 3222;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/cloud", cloudRouter);

function startApp() {
  try {
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => console.log(`Working on server ${port}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
